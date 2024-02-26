import React from "react";
import "./Explore.css";

const Explore = (props) => {
  return (
    <div id="explore">
      {/* <h3>Explore Model 000</h3> */}
      <div className="card">
        <img src={props.img} alt="" />
        <div>
          <p className="model">{props.model}</p>
          <p className="color">{props.color}</p>
          <p className="price">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
