import React from "react";
import "./Home.css";
import Product from "./Product";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/TV/BRND/BRND_MTH21_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD6862._CB670220811_.jpg"
          alt=""
        /> */}
        <ImageSlider />
      </div>

      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />

        <Product
          id="2"
          title="Kenwood kMix Stand Mixer for Baking, 
                Stylish Kitchen Mixer with K-Beaker, Dough Hock and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/kenwood-kmix-stand-mixer-chrome-582b40a.jpg?quality=90&resize=385%2C350"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          image="https://images.samsung.com/is/image/samsung/ca-c49rg9-lc49rg90ssnxza-lperspectivesilver-thumb-153309973?$480_480_PNG$"
          rating={3}
        />

        <Product
          id="4"
          title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          image="https://www.serversdirect.co.uk/Images/B07P4DKX14_1_Supersize.jpg?width=937&height=937&v=2"
          rating={4}
        />

        <Product
          id="5"
          title="2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Rose Gold (4th Generation)"
          price={779.0}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202009_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1598653762000"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 512 X 1440"
          price={1094.98}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
