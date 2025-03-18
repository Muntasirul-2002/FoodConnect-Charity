import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth";
import { axiosInstance, getConfig } from "../utils/request";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function AdminPrivateRoute(){
    const [ok,setOk] = useState(false)
    const [auth] = useAuth()

    useEffect(()=>{
        const authCheck = async () =>{
            try {
                await getConfig()
                const res = await axiosInstance.get("/api/v1/auth/admin-auth");
                setOk(res.data.ok)
            } catch (error) {
                setOk(false)
                toast.error("Oops! You don't have access")
            }
        }
        if(auth?.token)authCheck()
    },[auth?.token])
return ok ? <Outlet/> : <Spinner/>
}