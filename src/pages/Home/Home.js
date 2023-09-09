import React from "react";
import { Nav, Hero, Stats, Vegan } from "../../components";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Nav />

      <Hero />
      <Stats />
      <Vegan />
    </div>
  );
};

export default Home;
