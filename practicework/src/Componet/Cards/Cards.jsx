import React from "react";
import "./Cards.scss";

// import { Image } from "../../Assets/Image";
import { ReactComponent as Html } from "../../Assets/Images/Html.svg";
import { ReactComponent as Reacticon } from "../../Assets/Images/Reacticon.svg";
import { ReactComponent as Angular } from "../../Assets/Images/Angular.svg";



const Card = () => {
  return (
    <div className="CardBox">
      <div className="container">
        <div className="CardWrapper">
          <div class="card">
            <div className="background bg-light"><Html /></div>
            <div class="card-body">
              <p class="card-text text-center">Html</p>
            </div>
          </div>
          <div class="card">
            <div className="background bg-light"><Reacticon /></div>
            <div class="card-body">
              <p class="card-text text-center">React</p>
            </div>
          </div>
          <div class="card">
            <div className="background bg-light"><Angular /></div>
            <div class="card-body">
              <p class="card-text text-center">Angular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
