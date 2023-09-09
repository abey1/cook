import React from "react";
import { star_big } from "./img";
import "./Stats.scss";

const Landing = () => {
  return (
    <div className="stats_main_holder">
      <div className="stats_main">
        <div className="stats_left">
          <div className="stats_single">
            <div className="stats_single_top">100+</div>
            <div className="stats_single_bottom">Talented Chefs</div>
          </div>
          <div className="stats_single">
            <div className="stats_single_top">1000+</div>
            <div className="stats_single_bottom">Students</div>
          </div>
        </div>
        <div className="stats_right">
          <div className="stats_single">
            <div className="stats_single_top">
              4.8
              <img src={star_big} alt="" />
            </div>
            <div className="stats_single_bottom">Rating</div>
          </div>
          <div className="stats_single">
            <div className="stats_single_top">20+</div>
            <div className="stats_single_bottom">Cooking Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
