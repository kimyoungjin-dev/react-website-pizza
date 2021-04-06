import React from "react";
import HomeCenter from "./HomeCenter";
import SliderBar from "Components/SliderBar";
import Products from "./Products";
import Feature from "Screens/Home/Feature";
import HomeBread from "./HomeBread";

const Home = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <HomeCenter />
      <Products />
      <Feature />
      <HomeBread />
    </>
  );
};

export default Home;
