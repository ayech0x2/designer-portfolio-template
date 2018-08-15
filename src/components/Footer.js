import React from "react";
import Behance from "../static/img/behance-grey.png";
import Linkedin from "../static/img/linkedin-grey.png";
import Dribble from "../static/img/dribble-grey.png";
import Facebook from "../static/img/fb-grey.png";
import Instagram from "../static/img/instagram-grey.png";
import Twitter from "../static/img/twitter-grey.png";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid remove-padding bg-footer">
        <div className="container footer p-2">
          <div>
            <span>© 2018 UI43 - Free Templates</span>
            <div>
              <img alt="behance" src={Behance} className="ml-2" />
              <img alt="dribble" src={Dribble} className="ml-2" />
              <img alt="facebook" src={Facebook} className="ml-2" />
              <img alt="linkedin" src={Linkedin} className="ml-2" />
              <img alt="instagram" src={Instagram} className="ml-2" />
              <img alt="twitter" src={Twitter} className="ml-2" />
            </div>
          </div>
          <div className="footer-navigation">
            <span className="footer-nav">Work</span>
            <span className="footer-nav">About me</span>
            <span className="footer-nav">Blog</span>
            <span className="footer-nav">Contact</span>
            <span className="footer-nav rounded-link x-color">Hire me</span>
          </div>
        </div>
      </div>
    );
  }
}
