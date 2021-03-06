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
        <div className="container top-container p-16 remove-padding d-sm-flex flex-column flex-sm-column flex-md-column flex-lg-row
        align-items-center">
          <div className="left-side p-4 mb-5 text-center text-md-left">
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
            <div className="btns-container d-flex justify-content-center justify-content-md-start">
              <span className="btn-rounded">hire me</span>
              <span className="btn-none-rounded">see my resume</span>
            </div>
          </div>
          <div className="right-side ">
            <img alt="designer" src={Designer} className="img-auto"/>
          </div>
        </div>
        <hr className="hr remove-margin" />
      </Fragment>
    );
  }
}
