import React, { useEffect, useState } from 'react'
import '../styles/admins.css'
import { axiosInstance, getConfig } from '../../utils/request'
import toast from 'react-hot-toast'
const Admins = () => {
  const [getAdmins,setGetAdmins] = useState([])
  const fetchAdmin = async()=>{
    try {
      await getConfig()
      const response = await axiosInstance.get("/api/v1/auth/get-all-admin")
      if(response.data.getAllAdmins){
        setGetAdmins(response.data.getAllAdmins)
        console.log("Admins State Updated:", response.data.getAllAdmins);
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("Error in getting admin details: ", error);
    }
  }

  useEffect(()=>{
    fetchAdmin()
  },[])
  return (
    <div className="container mt-5">
    <div className="d-flex justify-content-center row">
      <div className="col-md-10">
        <div className="rounded">
          <div className="table-responsive table-borderless">
            <table className="table">
              <thead>
                  <tr>
                    <th className="text-center"></th>
                    <th>ID</th>
                    <th>Email</th>
                    <th />
                  </tr>
              </thead>
              {getAdmins && getAdmins.length > 0 ? (
                getAdmins.map((admin) => (
                  <tbody className="table-body" key={admin._id}>
                    <tr className="cell-1">
                      <td className="text-center"></td>
                      <td># {admin._id}</td>
                      <td>
                       {admin.email}
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <center>
                  <h2>We've 0 admin</h2>
                </center>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Admins