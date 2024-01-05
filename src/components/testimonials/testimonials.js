import "./testimonials.css";
import React from "react";
import testimonies from "./testimonies";

function Testies(props) {
  return (
    <div className="content">
      <div className="box">
        <img
          src={require(`${props.src}`)}
          alt="pfp"
          style={{
            width: "50px",
            borderRadius: "100%",
            border: "#fff solid 5px",
          }}
        />
        <h3>{props.name}</h3>
        <h4>{props.role}</h4>
        <p>{props.test}</p>
      </div>
    </div>
  );
}

function testimonial() {
  return (
    <div className="testimonials">
      <div className="testimonial-slide">{testimonies.map(Testies)}</div>
      <div className="testimonial-slide">{testimonies.map(Testies)}</div>
    </div>
  );
}

export default testimonial;
