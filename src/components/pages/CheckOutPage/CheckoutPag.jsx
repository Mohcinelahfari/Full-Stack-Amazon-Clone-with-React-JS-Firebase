import React from 'react'
import AdsImage from "../../../assets/images/star.png"
import { useAuth } from '@/context/GlobalSttate'
import CheckoutProduct from './CheckoutProducts/CheckoutProduct'
function CheckoutPag() {
    const {user, basket} = useAuth()
  return (
    <div className='checkout'>
        <div className="checkout-left">
            <img src={AdsImage} alt=""  className="checkout-ad"/>
        </div>
        <h3>Hello {user?.email}</h3>
        <h2  className="checkout-title">
            Your Basket Product
        </h2>
        {
            basket.map((item) => (
                <CheckoutProduct id={item.id} title={}/>
            ))
        }
    </div>
  )
}

export default CheckoutPag