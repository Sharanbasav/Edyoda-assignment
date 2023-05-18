import React from "react";
import style from "./Content.module.css";
import book from "../../assets/book.svg";
import clock from "../../assets/clock.svg";
import live from "../../assets/live.svg";
import graduate from "../../assets/graduate.svg";
import ads from "../../assets/ads.svg";

export default function Content() {
  return (
    <div className={style.mainContainer}>
      <h1>
        Access curated courses worth ₹{" "}
        <span style={{ color: "red", textDecoration: "line-through" }}>
          <span style={{ color: "white", fontFamily: "'Roboto', sans-serif" }}>
            18,500
          </span>
        </span>{" "}
        at just{" "}
        <span style={{ color: " #0096FF", fontFamily: "'Roboto', sans-serif" }}>
          ₹ 99
        </span>{" "}
        per year!
      </h1>
      <div className={style.contentContainer}>
        <div className={style.content}>
          <img src={book} />
          <p>
            <span>100+</span> Job relevant courses
          </p>
        </div>
        <div className={style.content}>
          <img src={clock} />
          <p>
            <span>20,000+ </span>Hours of content
          </p>
        </div>
        <div className={style.content}>
          <img src={live} />
          <p>
            <span>Exclusive </span>webinar access
          </p>
        </div>
        <div className={style.content}>
          <img src={graduate} />
          <p>
            Scholarship worth<span> ₹94,500</span>
          </p>
        </div>
        <div className={style.content}>
          <img src={ads} />
          <p>
            <span>Ad Free </span>learning experience
          </p>
        </div>
      </div>
    </div>
  );
}
