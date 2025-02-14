import React, { useEffect, useState } from "react";
import "../styles/order.css";
import { axiosInstance, getConfig } from "../../utils/request";
import { useAuth } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, message, Select } from "antd";
import toast from "react-hot-toast";

const { Option } = Select;
const Orders = () => {
  const [getOrder, setGetOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [auth] = useAuth();

  const GetOrders = async () => {
    try {
      await getConfig();
      const response = await axiosInstance.get(`/api/v1/order/get-orders/${auth?.user?._id}`)
      if (response.data.success) {
        setGetOrder(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error in getting orders: ", error);
    }
  };

  useEffect(() => {
    if (auth?.token) GetOrders();
  }, [auth?.token]);
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      setLoading(true);
      await axiosInstance.put(`/api/v1/order/update-order-status/${orderId}`, {
        status: newStatus,
      });

      setGetOrder((prevOrders) =>
        prevOrders.map((order) =>
          order._id == orderId ? { ...order, status: newStatus } : order
        )
      );
      toast.success("Order Status Updated Successfully")
    } catch (error) {
      console.log("Error updating order  status:", error)
      toast.error("Failed to update order status")
    }finally{
      setLoading(false)
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    // Add leading zeros to day and month if needed
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    return `${day}/${month}/${year}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Not Process":
        return "#ff9800";
      case "UnProcessed":
        return "#f44336";
      case "Packaging":
        return "#2196f3";
      case "Shipped":
        return "#3f51b5";
      case "Delivered":
        return "#4caf50";
      case "Cancel":
        return "#9e9e9e";
      default:
        return "#607d8b";
    }
  };
  return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10">
            <div className="rounded">
              <div className="table-responsive table-borderless">
                <table className="table">
                  <thead>
                    {getOrder.length > 0 ? (
                      <tr>
                        <th className="text-center"></th>
                        <th>Order #</th>
                        <th>Item name</th>
                        <th>Status</th>
                        <th>Placed on</th>
                        <th>Delivery location</th>
                        <th>NGO Name</th>
                        <th>NGO Address</th>
                        <th>NGO Contact</th>
                        <th>Action</th>
                      </tr>
                    ) : null}
                  </thead>
                  {getOrder && getOrder.length > 0 ? (
                    getOrder.map((order) => (
                      <tbody className="table-body" key={order._id}>
                        <tr className="cell-1">
                          <td className="text-center"></td>
                          {/* <td># {order._id.substring(8, 0)}..</td> */}
                          <td>
                            #{order._id}
                          </td>
                          <td>
                            {Array.isArray(order.food_name)
                              ? order.food_name.join(", ")
                              : order.food_name}
                          </td>
                          <td>
                            <span
                              className="badge"
                              style={{
                                backgroundColor: getStatusColor(order.status),
                                color: "#fff",
                              }}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td> {formatDate(order.createdAt)} </td>
                          <td>
                            <a href={order.address.mapLink} target="_blank" rel="noopener noreferrer">
                              Location Link
                            </a>
                          </td>
                          <td>
                          {order.address.ngo}
                          </td>
                          <td>
                            {order.address.location}
                          </td>
                          <td>
                            {order.address.contact}
                          </td>
                          <td>
                            <Select
                              defaultValue={order.status}
                              style={{ width: 150 }}
                              onChange={(value) => updateOrderStatus(order._id, value)}
                              loading={loading}
                              disabled={order.status === "Delivered" || order.status === "Cancel"}
                            >
                              <Option value="Not Process">Not Process</Option>
                              <Option value="UnProcessed">UnProcessed</Option>
                              <Option value="Packaging">Packaging</Option>
                              <Option value="Shipped">Shipped</Option>
                              <Option value="Delivered">Delivered</Option>
                              <Option value="Cancel">Cancel</Option>
                            </Select>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  ) : (
                    <center>
                      <h2>You Don't have any orders yet</h2>
                    </center>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Orders;
