import React from "react";
import { Link } from "react-router-dom";
const Kitchen3 = () => (
  <div>
    <h1>
      <strong>
        <a href="/" className="text-danger">
          Food Receipies
        </a>
      </strong>
    </h1>
    <h3>Retail shop store outlet</h3>
    <img
      className="img-fluid"
      alt="aplikasi mesin kasir online restoran cafe rumah makan"
      src="https://1.bp.blogspot.com/-4W2N_mgnh-g/Xsa9XWZa8lI/AAAAAAAAJgg/Kd6YOv2cGioyCqGx6p_aBEmoJOfQyY8-gCK4BGAsYHg/new%2Bresto%2Bpos%2Bapp%2B-%2BCopy.jpg"
    />
    <p>
     Here is the more information provided{" "}
      <a href="/">mesin kasir online restoran cafe rumah makan</a> About Website
    </p>
    <div className="text-center">
      <Link to="/cafe" className="btn btn-danger">
        Click here
      </Link>
    </div>
  </div>
);

export default Kitchen3;
