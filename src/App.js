import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Top from "./components/Top";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe";
import Testimonial from "./components/Testimonial";
import ReadMe from "./components/ReadMe";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid remove-padding">
        <Header />
        <Top />
        <Work />
        <AboutMe />
        <Testimonial />
        <ReadMe />
        <Footer />
      </div>
    );
  }
}

export default App;
