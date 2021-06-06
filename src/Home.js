import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const images = [
    "https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/TV/BRND/BRND_MTH21_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD6862._CB670220811_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/ZGU1ZTAyOWIt/ZGU1ZTAyOWIt-YTU0YWQzYjYt-w1500._CB655559622_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Pets_Products/XCM_Manual_1500x600_1216491_1122672_ca_ca_pet_month_d7cfc950_80b7_48ee_950b_c328cb3d4af5_jpg._CB419448200_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/YjdiZWM5NmEt/YjdiZWM5NmEt-MDNlNGE3MGEt-w1500._CB658366585_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Certified_Refurbished/XCM_Manual_1329890_1696416_CA_ca_gw_pc_tallhero_2x_ca_en_3859835_1500x600_1X_en_CA._CB668432380_.jpg",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        {/* <div className="home__leftArrow">&lt</div> */}
        <img className="home__image" src={images[index]} alt="" />
        {/* <div className="home__rightArrow">&gt</div> */}
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
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beaker, Dough Hock and Whisk, 5 Litre Glass Bowl"
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
