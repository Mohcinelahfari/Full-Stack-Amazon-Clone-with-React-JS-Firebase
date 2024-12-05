import { useAuth } from '@/context/GlobalSttate'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Payement.css"
import { NumericFormat } from 'react-number-format';
import CheckoutProduct from '../CheckOutPage/CheckoutProducts/CheckoutProduct'
import { getBasketTotal } from '@/context/AppReducer';
function Payement() {
  const { dispatch, basket, user } = useAuth()
  return (
    <div className='payement'>
      <div className="payment-container">
        <h1>Checkout (<Link to={'/checkout'}>{basket.length} item</Link>)</h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Maroc CasaBlanca</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review Items and Delevery</h3>
          </div>
          <div className="payment-items">
            {
              basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  key={item.id}
                />
              ))
            }
          </div>
        </div>
        <div className="payment-section">
          <h3>PAyment Payment</h3>
          <div className="payment-details">
            <form action="">
              <div className='payment-priceContainer'>
                <NumericFormat
                  renderText={(value) => (
                    <>
                      <p>
                        ({basket.length} product{basket.length > 1 ? 's' : ''}) :{' '}
                        <strong>{value}</strong>
                      </p>

                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button>Buy Now</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Payement