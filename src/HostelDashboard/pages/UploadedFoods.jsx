import React from 'react'



const UploadedFoods = () => {
  return (
    <div className="food-card">
      <div className="image-container">
        <img
          src={food.images[currentImageIndex]}
          alt={food.name}
          className="food-image"
        />
      </div>
      <div className="food-details">
        <h3 className="food-name">{food.name}</h3>
        <p className="food-description">{food.description}</p>
        <p className="food-quantity">Quantity: {food.quantity}</p>
        <p className="food-category">Category: {food.category}</p>
      </div>
    </div>
  )
}

export default UploadedFoods