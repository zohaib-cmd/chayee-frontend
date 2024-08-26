import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat  ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://cdn.vectorstock.com/i/500p/55/76/bread-background-vintage-bakery-banner-vector-51005576.jpg)",
          backgroundSize:"cover"

      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-success font-[600] capitalize`}
          style={{color:"brown"}}
        >
          The Best Tea & Breakfast at <br /> Your Table
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]"  style={{color:"brown"}}>
        Welcome to our delightful bakery, where we blend passion and perfection into every delicious creation. Our artisanal treats are a symphony of flavors, crafted with the finest ingredients and a dash of love.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
