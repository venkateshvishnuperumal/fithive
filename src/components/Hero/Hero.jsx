import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/*Ad Section */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "170px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the city</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your body and live up
              your life to fullest
            </span>
          </div>
        </div>
        {/*Figures Section */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={150} start={100} delay="4" preFix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            {" "}
            <span>
              <NumberCounter end={980} start={800} delay="4" preFix="+" />{" "}
            </span>
            <span>members joined</span>
          </div>
          <div>
            {" "}
            <span>
              <NumberCounter end={50} start={0} delay="3.5" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*Button Section */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4.5rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/*Hero Images Section*/}

        <img src={hero_image} alt="Hero" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "19.6rem" }}
          transition={transition}
          src={hero_image_back}
          alt="Hero Back"
          className="hero-image-back"
        />

        {/*Calories Section*/}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned </span>
            <span>220 kcal </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
