import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Home;
