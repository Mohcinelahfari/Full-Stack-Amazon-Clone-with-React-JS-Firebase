
import { getBasketTotal } from '@/context/AppReducer';
import { useAuth } from '@/context/GlobalSttate';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import "./subtotal.css"
function Subtotal() {
  const { basket } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              ({basket.length} product{basket.length > 1 ? 's' : ''}) :{' '}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
