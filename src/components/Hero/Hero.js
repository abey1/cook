import React from "react";
import { heroImg, playCircle, star, heroRightOrnament } from "./img/index";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <div className="hero_heading_1">
          Master the Art of Cooking with{" "}
          <span className="hero_heading_special">Experts</span> Worldwide
        </div>
        <p className="hero_paragraph">
          Experience the joy of cooking in a whole new way with our engaging
          online cooking classes. Learn from the chefs, share your unique
          culinary knowledge, and join our growing foodie community. With COOK,
          learning, and teaching becomes a shared passion.
        </p>
        <div className="video_starter">
          <img src={playCircle} alt="play circle" />
          Learn more in the COOK video
        </div>
        <div className="hero_btn_holder">
          <div className="find_your_tutor_btn">Find Your Tutor</div>
          <div className="join_our_chefs">Join Our Chefs</div>
        </div>
      </div>
      <div className="hero_right">
        <img className="hero_img" src={heroImg} alt="" />
        <img
          className="hero_ornament_right"
          src={heroRightOrnament}
          alt="hero right ornament"
        />
        <div className="testimonial_holder">
          <div className="testimonial">
            <div className="testimonial_top">
              <div className="face_pic_holder"></div>
              <div className="name_and_rating">
                <div className="name">David Mitchell</div>
                <div className="rating">
                  <div className="rating_number">4.8</div>
                  <div className="rating_star">
                    <img src={star} alt="star pic" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial_text">
              I've discovered a whole new world of flavors. Learning to cook has
              never been this fun and engaging!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
