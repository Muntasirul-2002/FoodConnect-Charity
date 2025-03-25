import React, { useEffect } from 'react'

const GoogleAdSense = () => {
     useEffect(()=>{
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            } catch (error) {
                console.log("error in google ads:", error)
            }
        },[])
  return (
    <ins
    className="adsbygoogle"
    style={{ display: "block" }}
    data-ad-client="ca-pub-1516523078833738"
    data-ad-slot="5030992485"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
  )
}

export default GoogleAdSense