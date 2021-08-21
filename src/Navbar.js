import React from "react";

const Navbar = ({ onBtnIsClicked }) => {
  const clicked = () => {
    onBtnIsClicked(1);
  };

  return (
    <nav className="top--nav">
      <h1 className="logo">
        <span>Customer Information</span>
      </h1>
      <button className="get--users--btn" onClick={clicked}>
        Get Information
      </button>
    </nav>
  );
};

export default Navbar;
