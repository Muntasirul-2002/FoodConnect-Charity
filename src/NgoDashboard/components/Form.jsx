import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance, getConfig } from '../../utils/request'
import '../style/updateOrderDetails.css'
import toast from 'react-hot-toast'
const Form = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [ngo, setNgo] = useState("")
    const [contact, setContact] = useState("")
    const [location, setLocation] = useState("")
    const [mapLink, setMapLink] = useState("")
    const [id,setId] = useState("")


    const getSingleOrderItem = async () =>{
        try {
            await getConfig()
            const {data} = await axiosInstance.get(`/api/v1/order/get-order/${params.id}`)
            setName(data.address.name)
            setId(data._id)
            setNgo(data.address.ngo)
            setContact(data.address.contact)
            setLocation(data.address.location)
            setMapLink(data.address.mapLink)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getSingleOrderItem()
        //eslint-disable-next-line
    })
    
    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            const foodData = new FormData();
            foodData.append("name", name)
            foodData.append("ngo", ngo)
            foodData.append("contact", contact)
            foodData.append("location", location)
            foodData.append("mapLink", mapLink)
            await getConfig()
            const {data } = await axiosInstance.put(`/api/v1/order/update-order/${id}`, foodData)
            if(data?.success){
                toast.success("Delivery Details updated")
                navigate("/dashboard/ngo")
            }else{
                toast.error(data?.error || "Error updating delivery details")
            }
            
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    } 

  return (
    <div className="form-update-container">
    <h2 className='submit-your-details'>Submit Your Details</h2>
    <form className="form-update-order">
      <div className="form-group-update-order">
        <label htmlFor="name" className="label-updated-order">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(value)=> {
            setName(value)
          }}
          value={name}
         
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="ngo" className="label-updated-order">Enter NGO name</label>
        <input
          type="text"
          id="ngo"
          name="ngo"
          onChange={(value)=> {
            setNgo(value)
          }}
          value={ngo}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact" className="label-updated-order">Contact</label>
        <input
          type="text"
          id="contact"
          name="contact"
          onChange={(value)=> {
            setContact(value)
          }}
          value={contact}
        />
      </div>

      <div className="form-group">
        <label htmlFor="location" className="label-updated-order">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={(value)=> {
            setLocation(value)
          }}
          value={location}
        />
      </div>

      <div className="form-group">
        <label htmlFor="mapLink" className="label-updated-order">Map Link</label>
        <input
          type="url"
          id="mapLink"
          name="mapLink"
          onChange={(value)=> {
            setMapLink(value)
          }}

          value={mapLink}
        />
      </div>
      <div>
        <button className='updated-map-order'>
            Update Map
        </button>
      </div>

      <button type="submit" className="updated-submit-order" onClick={handleUpdate}>
        Submit
      </button>
    </form>
  </div>
  )
}

export default Form