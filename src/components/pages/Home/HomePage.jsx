import React from 'react';
import './HomePage.css';
import BackGroudImages from '../../../assets/images/back.jpg';
import Product from '../contextHomePage/Product';
import phone from '../../../assets/images/phone.jpg';
import foot from '../../../assets/images/foot.jpg';
import airp from '../../../assets/images/airp.jpg';
import cask from '../../../assets/images/cask.jpg';
import basket from '../../../assets/images/baskzt.jpg';
import shortid from 'shortid';

function HomePage() {
  return (
    <div className="home">
      <div className="home-container">
        <img src={BackGroudImages} className="home-image" alt="Background" />
        <div className="home-row">
          <Product
            image={airp}
            rating={4}
            title="This product is AirPods"
            price={45}
            id={shortid.generate()}
          />
          <Product
            image={phone}
            rating={5}
            title="This product is a Phone"
            price={300}
            id={shortid.generate()}
          />
        </div>
        <div className="home-row">
          <Product
            image={foot}
            rating={3}
            title="This product is a Footwear"
            price={60}
            id={shortid.generate()}
          />
          <Product
            image={cask}
            rating={5}
            title="This product is a Cask"
            price={120}
            id={shortid.generate()}
          />
          <Product
            image={basket}
            rating={4}
            title="This product is a Basket"
            price={35}
            id={shortid.generate()}
          />
        </div>
        <div className="home-row">
          <Product
            image={phone}
            rating={4}
            title="Another Phone Product"
            price={250}
            id={shortid.generate()}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
