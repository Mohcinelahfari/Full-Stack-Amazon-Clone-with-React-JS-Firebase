import React from 'react'
import AdsImage from "../../../assets/images/ads.jpeg"
import { useAuth } from '@/context/GlobalSttate'
import CheckoutProduct from './CheckoutProducts/CheckoutProduct'
import "./CheckoutPag.css"
function CheckoutPag() {
    const {user, basket} = useAuth()
  return (
    <div className='checkout'>
        <div className="checkout-left">
            <img src={AdsImage} alt=""  className="checkout-ad"/>
        
        <div>
        <h3>Hello {user?.email}</h3>
        <h2  className="checkout-title">
            Your Basket Product
        </h2>
        {
            basket.map((item) => (
                <CheckoutProduct
                key={item.id}
                id={item.id} title={item.title} 
                    price={item.price} rating={item.rating}
                    image={item.image}
                />
            ))
        }
        </div>
    </div>
    </div>
  )
}

export default CheckoutPag