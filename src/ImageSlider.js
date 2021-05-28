import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

function ImageSlider() {
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
    <div className="imageSlider">
      <img src={images[index]} alt="" />
    </div>
  );
}

export default ImageSlider;
