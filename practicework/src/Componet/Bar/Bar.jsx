import React from "react";
import "../Bar/Bar.scss";

const Progress = () => {
  return (
    <div className="Progress_bar">
      <div className="container">
        <div className="Progress-wrapper">
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
