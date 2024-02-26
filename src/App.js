import React from "react";
import Body from "./components/Body/Body";
import Explore from "./components/Explore/Explore";
import items from "./explore";
import Hype from "./components/Hype/Hype";
import Model001 from "./components/Model001/Model001";
import Sopa from "./components/Sopa/Sopa";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Body />
      <div>
        <div className="card-flex">
          <Explore
            img={items[0].imgURL}
            model={items[0].model}
            color={items[0].color}
            price={items[0].price}
          />

          <Explore
            img={items[1].imgURL}
            model={items[1].model}
            color={items[1].color}
            price={items[1].price}
          />

          <Explore
            img={items[2].imgURL}
            model={items[2].model}
            color={items[2].color}
            price={items[2].price}
          />

          <Explore
            img={items[3].imgURL}
            model={items[3].model}
            color={items[3].color}
            price={items[3].price}
          />
        </div>

        <div className="card-flex">
          <Explore
            img={items[0].imgURL}
            model={items[0].model}
            color={items[0].color}
            price={items[0].price}
          />

          <Explore
            img={items[1].imgURL}
            model={items[1].model}
            color={items[1].color}
            price={items[1].price}
          />

          <Explore
            img={items[2].imgURL}
            model={items[2].model}
            color={items[2].color}
            price={items[2].price}
          />

          <Explore
            img={items[3].imgURL}
            model={items[3].model}
            color={items[3].color}
            price={items[3].price}
          />
        </div>
      </div>
      <Hype />
      <Model001 />
      <Sopa />
      <Footer />
    </div>
  );
};

export default App;
