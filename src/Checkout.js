import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';

function Checkout() {

   const [{ basket, user }, dispatch] = useStateValue();

    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Tablets/Work_From_Home_Tablets_Creative_1500x200.jpg"
            alt="adv_image"
          />

          <div>
          <h3>
            Hello, {user?.email}
          </h3>
          <h2 className="checkout__title">Your Shopping Basket </h2>
          </div>

          <div>
              <h2 className="checkout__title">
                  {basket.map(item => (
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} />
                  ))}
              </h2>
          </div>
        </div>

        <div className="checkout__right">
        <Subtotal/>
        </div>
      </div>
    );
}

export default Checkout;
