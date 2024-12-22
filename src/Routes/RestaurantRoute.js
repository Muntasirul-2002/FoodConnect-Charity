import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth";
import { Outlet } from "react-router-dom";
import {toast} from 'react-hot-toast'
import {axiosInstance, getConfig} from '../utils/request'
import Spinner from "../components/Spinner";

export default function RestaurantPrivateRoute(){
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();
    useEffect(()=> {
        const authCheck = async () =>{
            try {
                await getConfig()
                const res = await axiosInstance.get("/api/v1/auth/res-auth");
                setOk(res.data.ok)
            } catch (error) {
                setOk(false)
                toast.error("Oops ! Oops!! You don't have permission to access")
            }

        }
        if(auth?.token) authCheck()
    }, [auth?.token])
return ok ? <Outlet/> : <Spinner/>
}