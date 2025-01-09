import React, { useEffect, useState } from "react";
import "../../HostelDashboard/styles/order.css";
import { axiosInstance, getConfig } from "../../utils/request";
import { useAuth } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";

const Orders = () => {
  const [getOrder, setGetOrder] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [auth] = useAuth();

  const GetOrders = async () => {
    try {
      await getConfig();
      const response = await axiosInstance.get("/api/v1/order/get-orders", {
        userID: auth?.user?._id,
      });
      console.log(response.data);
      setGetOrder(response.data);
    } catch (error) {
      console.log("Error in getting orders: ", error);
    }
  };

  useEffect(() => {
    if (auth?.token) GetOrders();
  }, [auth?.token]);

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
                <h3>Restaurant orders</h3>
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
                        <td># {order._id.substring(8, 0)}..</td>
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
                          <button className="order-cancel-btn">cancel</button>
                          <Link to={`/dashboard/update-order/${order._id}`}>
                            <button className="order-update-btn">Update</button>
                          </Link>
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
