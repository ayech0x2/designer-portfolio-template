import React, { Component } from "react";
import "./App.css";
import Top from "./components/Top";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe";
import Testimonial from "./components/Testimonial";
import ReadMe from "./components/ReadMe";
import Footer from "./components/Footer";
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";
import Navigation from "./components/Navigation";

class App extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };
  scrollTo = name => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };
  render() {
    return (
      <div className="container-fluid remove-padding">
        <Navigation scrollTo={this.scrollTo} />
        <Element>
          <Top />
        </Element>
        <Element name="work">
          <Work />
        </Element>
        <Element name="about">
          <AboutMe />
        </Element>
        <Element>
          <Testimonial />
        </Element>
        <Element name="blog">
          <ReadMe />
        </Element>
        <Element>
          <Footer />
        </Element>
      </div>
    );
  }
}

export default App;
