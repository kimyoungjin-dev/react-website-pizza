import React from "react";
import HomeCenter from "./HomeCenter";
import Products from "./Products";
import Feature from "Screens/Home/Feature";
import HomeBread from "./HomeBread";

const Home = () => {
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
