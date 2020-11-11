import React from "react";

const Style_Header = {
  backgroundColor: "#2c3e50",
  width: "100%",
  position: "fixed",
  left: "0",
  top: "0",
  padding: "16px"
};
const Style_Logo = {
  maxHeight: "16px"
};

class Header extends React.Component {
  render() {
    return (
      <div style={Style_Header}>
        <img
          src="https://static.shortlyst.com/assets/campaigns/Shopalyst_White_RobotoCondensed_1533899706853.png"
          alt="Logo"
          style={Style_Logo}
        />
      </div>
    );
  }
}

export default Header;
