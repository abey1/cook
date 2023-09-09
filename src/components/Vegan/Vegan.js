import React from "react";
import "./Vegan.scss";
import { vegan_img, vegan_arrow_up_right } from "./img";

const Vegan = () => {
  return (
    <div className="vegan_main_holder">
      <div className="vegan_main">
        <div className="vegan_center">
          <img src={vegan_img} alt="vegan img" />
          <div className="vegan_text">
            <div className="vegan_text_top">
              Vegan Cooking
              <img src={vegan_arrow_up_right} alt="vegan up right" />
            </div>
            <div className="vegan_text_bottom">
              Create delicious, nutritious meals with plant-based ingredients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vegan;
