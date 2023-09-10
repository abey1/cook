import React from "react";
import "./Explore.scss";
import {
  explore_and_learn_ornament,
  explore_and_learn_search,
  bakery_img,
  bakery_img_right,
  vegan_cooking_img,
  seafood_img,
  bbq_img,
  wine_img,
  cake_img,
  explore_bottom_right_ornament,
  explore_arrow_right,
} from "./img/index.js";

const Explore = () => {
  return (
    <div className="explore_main_container">
      <div className="explore_main">
        <div className="explore_top">
          <div className="explore_top_left">
            <img
              className="explore_top_left_img"
              src={explore_and_learn_ornament}
              alt="explore and learn ornament"
            />
            <div className="explore_top_left_text">
              <div className="explore_top_left_text_title">Explore & Learn</div>
              <div className="explore_top_left_text_description">
                Dive into a range of cooking styles and techniques tailored to
                your interests
              </div>
            </div>
          </div>
          <div className="explore_top_right">
            <img
              className="explore_top_right_img"
              src={explore_and_learn_search}
              alt="explore and learn search"
            />
            <div className="explore_top_right_text">
              Search tutors by category
            </div>
          </div>
        </div>
        <div className="explore_center">
          <div className="explore_center_single_holder">
            <div className="explore_center_single_colored">
              <img
                className="explore_center_single_img"
                src={bakery_img}
                alt="bakery img"
              />
              <div className="explore_center_single_text">
                <div className="explore_center_single_text_top">
                  Bakery
                  <img src={bakery_img_right} alt="bakery image right" />
                </div>
                <div className="explore_center_single_text_bottom">
                  Master baking: from rustic bread to delicate pastries
                </div>
              </div>
            </div>
          </div>
          <div className="explore_center_single_holder">
            <div className="explore_center_single">
              <img
                className="explore_center_single_img"
                src={vegan_cooking_img}
                alt="vegan img"
              />
              <div className="explore_center_single_text">
                <div className="explore_center_single_text_top">
                  Vegan Cooking
                  <img src={explore_arrow_right} alt="bakery image right" />
                </div>
                <div className="explore_center_single_text_bottom">
                  Create delicious, nutritious meals with plant-based
                  ingredients
                </div>
              </div>
            </div>
          </div>
          <div className="explore_center_single_holder">
            <div className="explore_center_single">
              <img
                className="explore_center_single_img"
                src={vegan_cooking_img}
                alt="vegan img"
              />
              <div className="explore_center_single_text">
                <div className="explore_center_single_text_top">
                  Seafood Mastery
                  <img src={explore_arrow_right} alt="bakery image right" />
                </div>
                <div className="explore_center_single_text_bottom">
                  Dive into seafood: from grilling fish to creating sushi
                </div>
              </div>
            </div>
          </div>
          <div className="explore_center_single_holder">
            <div className="explore_center_single">
              <img
                className="explore_center_single_img"
                src={bbq_img}
                alt="bbq img"
              />
              <div className="explore_center_single_text">
                <div className="explore_center_single_text_top">
                  BBQ & Grilling
                  <img src={explore_arrow_right} alt="bbq img" />
                </div>
                <div className="explore_center_single_text_bottom">
                  Fire up your skills with mouth-watering BBQ dishes
                </div>
              </div>
            </div>
          </div>
          <div className="explore_center_single_holder">
            <div className="explore_center_single">
              <img
                className="explore_center_single_img"
                src={wine_img}
                alt="wine img"
              />
              <div className="explore_center_single_text">
                <div className="explore_center_single_text_top">
                  Wine Pairing
                  <img src={explore_arrow_right} alt="bbq img" />
                </div>
                <div className="explore_center_single_text_bottom">
                  Enhance culinary experiences by mastering wine pairing
                </div>
              </div>
            </div>
          </div>
          <div className="explore_center_single_holder">
            <div className="explore_center_single">
              <img
                className="explore_center_single_img"
                src={cake_img}
                alt="cake img"
              />
              <div className="explore_center_single_text">
                <div className="explore_center_single_text_top">
                  Cake Decorating
                  <img src={explore_arrow_right} alt="bbq img" />
                </div>
                <div className="explore_center_single_text_bottom">
                  Enhance culinary experiences by mastering wine pairing
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore_bottom">
          <div className="explore_bottom_text">Show more</div>

          <img src={explore_bottom_right_ornament} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
