import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import "./styles/app.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div is="bodyHolder">
        <Header />
        <div className="content">
          <Content></Content>
        </div>
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<Main />, App);
