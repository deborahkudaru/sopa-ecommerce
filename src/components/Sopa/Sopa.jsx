import React from "react";
import "./Sopa.css";

const Sopa = () => {
  return (
    <div id="sopa">
      <div>
        <div className="our-story-flex">
          <img
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="our-story-sopa">
            <button className="sopa-button">Our Story</button>
            <h1>SOPA</h1>
          </div>
          <div>
            <h3>SOPA</h3>
            <p>
              Was born out of a simple yet powerful concept-creating a shoe that
              you would choose to wear every single day, and they've brought
              this idea to life in this bustling city of New York.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="our-story-flex">
          <img
            src="https://images.unsplash.com/photo-1563662931846-29b0af7443ff?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHNob2VzfGVufDB8fDB8fHww&w=500"
            alt=""
          />
          <div>
            <button className="sopa-button">Featured</button>
            <h1>HUMANS OF NEW YORK</h1>
          </div>

          <div>
            <p>
              Read our co-founder Sidra's story about struggle, chasing dreams,
              and making shoes.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div className="sopa-in-everyday">
          <h1>SOPA in Everday</h1>

          <p>@sopa</p>
          <div className="sopa-img-flex">
            <img className="sopa-images-4"
              src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww&w=500"
              alt=""
            />
            <img className="sopa-images-4"
              src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww&w=500"
              alt=""
            />
            <img className="sopa-images-4"
              src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww&w=500"
              alt=""
            />
            <img className="sopa-images-4"
              src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww&w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sopa;
