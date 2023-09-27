import React from "react";
import { Link } from "react-router-dom";
const Aseloley = () => (
  <div className="row">
    <div className="col-12 col-md-12 p-3 text-center">
      <div className="bg-danger text-white rounded p-3 p-md-5">
        <h3>
          <strong>Modern Website</strong>
        </h3>
        <p>Include modern website domain cloud host.</p>
        <p>
        Our Website Consists of Multiple Choices Where you can choose whatever you want. You can download multiple apps for shopping.There are several different ways to get an app depending on where you wish to download it. For smartphones, users can download apps directly from the app store that corresponds with the type of mobile device they have. For example, if you have an Apple iPhone, you can download apps directly from the App Store that is located in the phone. For Android devices, users can download mobile apps from the Google Play Store and Amazon's Amazon Appstore.
        </p>
        <Link to="/website" className="btn btn-light">
          More Info
        </Link>
      </div>
    </div>
  </div>
);

export default Aseloley;
