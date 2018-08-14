import React, { Fragment } from "react";
import Designer from "../static/img/designer.jpg";
import Behance from "../static/img/behance.jpg";
import Dribble from "../static/img/dribble.jpg";
import Linkedin from "../static/img/linkedin.jpg";
import Facebook from "../static/img/facebook.jpg";
import Instagram from "../static/img/instagram.jpg";
import Twitter from "../static/img/twitter.jpg";
export default class Top extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container top-container p-16 remove-padding">
          <div className="left-side">
            <span className="hello">Hello, I'm</span>
            <span className="name">Lewis Nathaniel</span>
            <span className="uiux">UI & UX Designer</span>
            <div className="social">
              <img alt="behance" src={Behance} />
              <img alt="dribble" src={Dribble} />
              <img alt="linkedin" src={Linkedin} />
              <img alt="facebook" src={Facebook} />
              <img alt="instagram" src={Instagram} />
              <img alt="twitter" src={Twitter} />
            </div>
            <div className="btns-container">
              <span className="btn-rounded">hire me</span>
              <span className="btn-none-rounded">see my resume</span>
            </div>
          </div>
          <div className="right-side">
            <img alt="designer" src={Designer} />
          </div>
        </div>
        <hr className="hr remove-margin" />
      </Fragment>
    );
  }
}
