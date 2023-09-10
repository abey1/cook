import React from "react";
import { Nav, Hero, Stats, Vegan, Explore } from "../../components";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Nav />

      <Hero />
      <Stats />
      <Vegan />
      <Explore />
    </div>
  );
};

export default Home;
