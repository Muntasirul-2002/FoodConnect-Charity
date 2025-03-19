import React, { useEffect, useState } from "react";
import "../style/orders.css";
import { axiosInstance, getConfig } from "../../utils/request";
import { useAuth } from "../../context/Auth";
import { Button, Modal } from "antd";
import toast from "react-hot-toast";

const Orders = () => {
  const [getOrder, setGetOrder] = useState([]);
  const [canceledOrders, setCanceledOrders] = useState(new Set());
  const [auth] = useAuth();

  const GetOrders = async () => {
    try {
      await getConfig();
      const response = await axiosInstance.get(`/api/v1/order/get-buyer-orders/${auth?.user?._id}`)
      console.log("Auth user id :", auth?.user?._id)
      if(response.data.success){
        setGetOrder(response.data.orders)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("Error in getting orders: ", error);
    }
  };

  useEffect(() => {
    if (auth?.token) GetOrders();
  }, [auth?.token]);
  const cancelOrder = async (orderId) => {
    Modal.confirm({
      title: "Are you sure you want to cancel this order?",
      content: "This action cannot be undone",
      okText: "Yes,Cancel",
      cancelText: "NO",
      onOk: async () => {
        try {
          const response = await axiosInstance.put(
            `/api/v1/order/update-order-status/${orderId}`,
            { status: "Cancel" }
          );
          if (response.data.success) {
            toast.success("Order Canceled Successfully");
            setCanceledOrders((prev) => new Set(prev).add(orderId));
            GetOrders();
          }
        } catch (error) {
          toast.error("Failed to cancel order");
          console.log("Error cancelling order :", error);
        }
      },
    });
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
                      <th>status</th>
                      <th>Placed on</th>
                      <th>Delivery location</th>
                      <th>Action</th>
                      <th />
                    </tr>
                  ) : (
                    <></>
                  )}
                </thead>
                {getOrder && getOrder.length > 0 ? (
                  getOrder.map((order) => (
                    <tbody className="table-body" key={order._id}>
                      <tr className="cell-1">
                        <td className="text-center"></td>
                        <td># {order._id}</td>
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
                          <a href={order.address.mapLink} target="_blank">
                            Location Link
                          </a>
                        </td>
                        <td>
                          {order.status !== "Cancel" && order.status !== "Delivered" &&
                          !canceledOrders.has(order._id) ? (
                            <Button
                              type="text"
                              danger
                              onClick={() => cancelOrder(order._id)}
                            >
                              Cancel Order
                            </Button>
                          ) : (
                            <Button type="dashed" danger disabled>
                              Cancelled
                            </Button>
                          )}
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
