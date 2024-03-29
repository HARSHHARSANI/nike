import React from "react";
import brandlogo from "../../public/images/brand_logo.png";

const Header = () => {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src={brandlogo} alt="logo" />
        </div>
        <div>
          {" "}
          <ul>
            <li className="listItems">Menu</li>
            <li className="listItems">Location</li>
            <li className="listItems">About</li>
            <li className="listItems">Contact</li>
          </ul>
        </div>
        <div>
          <button>Login</button>
          <button className="signup">SignUp</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
