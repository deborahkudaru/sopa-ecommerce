import React from "react";
import "./Hype.css";
// import { AiFillStar } from "react-icons/ai";

const Hype = () => {
  return (
    <div id="shoe-hype">
      <div className="hype-flex">
        <h2>The hype is real...</h2>
        <div className="hype">
          <img
            className="hype-image"
            src="https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div>
            <p className="hype-u">
              borkat u.
              {/* <span>
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                <AiFillStar />
              </span> */}
            </p>

            <p className="hype-p">
              This stylishly simple and incredibly comfortable shoes have become
              such a staple in my daily wardrobe that I'm already buying a
              second pair.
            </p>
          </div>
        </div>
      </div>

      <div className="hype-shop">
        <img
          src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>Model</p>
        <p>Navy</p>
        <button>Shop now</button>
      </div>
    </div>
  );
};

export default Hype;
