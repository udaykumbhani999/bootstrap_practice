import React from "react";
import "../Offset/Offset.scss";

const Offset = () => {
  return (
    <div className="columns">
      <div className="container">
        <div class="row ">
          <div class="col-12 col-md-6 col-lg-3 text-center border border-primary bg-light Textblack">
            first box
          </div>
          <div class="col-12 col-md-6 col-lg-3 text-center border border-secondary bg-light Textblack">
            second box
          </div>
          <div class="col-12 col-md-6 col-lg-3 text-center border border-success bg-light Textblack">
            third box
          </div>
          <div class="col-12 col-md-6 col-lg-3 text-center border border-danger bg-light Textblack">
            foure box
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offset;
