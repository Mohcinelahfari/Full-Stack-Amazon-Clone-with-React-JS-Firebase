import React from 'react'
import "./CheckoutProduct.css"
import starIcon from "../../../../assets/images/star.png"
import { useAuth } from '@/context/GlobalSttate'
import * as actionTy  from "../../../../context/ActionType"
function CheckoutProduct({ id, title, image, price, rating }) {
  const {dispatch} = useAuth()
  const RemoveProductDromBasket = () => {
    dispatch({
      type : actionTy.REMOVE_FROM_BASKET,
      id : id
    })
  }
  return (
    <div className='checkoutProduct'>
      <img src={image} className='checkoutProduct-image' alt="" />
      <div className="checkoutProduct-info">
        <p className='checkoutProduct-title'>{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {
            Array(rating).fill().map((_, i) => (
              <p>
                <img src={starIcon} alt="" />
              </p>
            ))
          }
        </div>
        <button onClick={RemoveProductDromBasket}>Remove From Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct