import React, { useEffect, useState } from 'react'
import '../styles/spinner.css'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
const Spinner = ({path="login"}) => {
  const [count, setCount] = useState(3)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=> {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(interval);
          navigate(`/${path}`, {
            state: { from: location.pathname }, // Pass the previous path as state
          });
        }
        return prevCount - 1; // Decrement the count
      });
    }, 1000);
    return () => clearInterval(interval);
  } ,[navigate, path,location])

  return (
   <>
    <div className="loader"></div>
    <h2 className='spinner-text'>{`You Don't have access to Dashboard. Redirect to login in ${count} seconds... `} </h2>
   </>
    
  )
}

export default Spinner