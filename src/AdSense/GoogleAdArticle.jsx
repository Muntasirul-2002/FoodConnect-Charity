import React, { useEffect } from "react";

const GoogleAdArticle = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log("error in google ads article:", error);
    }
  });
  return (
    <ins
      className="adsbygoogle"
      style={{display: "block"}}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-1516523078833738"
      data-ad-slot="5740572954"
    ></ins>
  );
};

export default GoogleAdArticle;
