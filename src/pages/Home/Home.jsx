import React from "react";
import "./home.scss";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
