import { useState, useEffect } from "react";
import { useAuth } from "../context/Auth";
import { Outlet } from "react-router-dom";
import { toast } from "react-hot-toast";
import { axiosInstance, getConfig } from "../utils/request";
import Spinner from "../components/Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        await getConfig(); // Ensure base URL is set
        const res = await axiosInstance.get("/api/v1/auth/hostel-auth");
        setOk(res.data.ok);
      } catch (error) {
        setOk(false);
        toast.error("Oops! You don't have access");
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner/>;
}
