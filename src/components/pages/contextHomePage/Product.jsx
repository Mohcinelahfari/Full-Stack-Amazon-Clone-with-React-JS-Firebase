import React from 'react'
import "./Product.css"
import star from "../../../assets/images/star.png"
import * as actions from "../../../context/ActionType"
import { useAuth } from '@/context/GlobalSttate'
function Product({id, title, price, rating, image}) {
    const {dispatch, basket} = useAuth()
    const handelClick = () => {
        dispatch({
            type : actions.ADD_TO_BASKET,
            item : {
                id : id,
                title : title,
                image : image,
                price : price,
                rating : rating
            }
        })
    }
  return (
    <div className='product'>
        <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
        <div className="product-rating">
            {
                Array(rating).fill().map((_, i) => (
                    <p>
                        <img src={star} alt=""/>
                    </p>
                ))
            }
            
            
        </div>
        <img src={image} alt="" className='product-img' />
        <button onClick={handelClick}>Add To Basket</button>
    </div>
  )
}

export default Product