import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="amazon_image"
          />

          <div className="home__row">
            <Product
              id="3483463"
              title="Apple iPhone 11 (64GB) - Black"
              image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
              price={63999.0}
              rating={5}
              
            />
            <Product
              id="78789473"
              title="BenQ GV1 Smart, Stylish, Portable LED Projector | DLP | in-Built Battery | Wi-Fi | Hotspot | Wireless Display | Bluetooth Speaker | Unique Tilt Hinge | Auto Key Stone | 100 Projection Image | USB-C"
              image="https://images-na.ssl-images-amazon.com/images/I/91I7dTs9AIL._SL1500_.jpg"
              price={30990.0}
              rating={3}
             
            />
          </div>

          <div className="home__row">
            <Product
              id="2432847"
              title="Too Much and Never Enough: How my Family created the most dangerous man Hardcover – 14 July 2020"
              image="https://images-na.ssl-images-amazon.com/images/I/41MSTTTkMAL._SX323_BO1,204,203,200_.jpg"
              price={580.0}
              rating={4}
              
            />
            <Product
              id="843859"
              title="AmazonBasics Sailboat Shower Curtain"
              image="https://images-na.ssl-images-amazon.com/images/I/912TLsg3Q1L._SL1500_.jpg"
              price={699.0}
              rating={3}
            />
            <Product
              id="893440"
              title="Voltas Beko 8 Place Table Top Dishwasher (DT8S, Silver)"
              image="https://images-na.ssl-images-amazon.com/images/I/61w8zR6LbJL._SL1500_.jpg"
              price={21499.0}
              rating={4}
              
            />
          </div>

          <div className="home__row">
            <Product
              id="7493750"
              title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
              image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
              price={140800.0}
              rating={4}
              
            />
          </div>
        </div>
      </div>
    );
}

export default Home
