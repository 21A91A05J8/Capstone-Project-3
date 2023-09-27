import React from "react";
import { Link } from "react-router-dom";
const Asereje = () => (
  <div className="row">
    <div className="col-12 col-md-6 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Toko Apps</strong>
        </h3>
        <p>Best Platform for online shopping</p>
        <p>
          Here we provides the opportunity where you can shop whatever the things you want with all retail prices. 
        </p>
        <Link to="/toko" className="btn btn-light">
          More Info
        </Link>
      </div>
    </div>
    <div className="col-12 col-md-6 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Resto Apps</strong>
        </h3>
        <p>Best Platform for online shopping</p>
        <p>
        Here we provides the opportunity where you can get more information about the apps where you can order the food.
        </p>
        <Link to="/resto" className="btn btn-light">
          More Info
        </Link>
      </div>
    </div>
  </div>
);

export default Asereje;
