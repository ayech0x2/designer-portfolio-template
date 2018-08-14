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
          <span>© 2018 UI43 - Free Templates</span>
          <div>
            <img src={Behance} className="ml-2" />
            <img src={Dribble} className="ml-2"/>
            <img src={Facebook} className="ml-2"/>
            <img src={Linkedin} className="ml-2"/>
            <img src={Instagram} className="ml-2"/>
            <img src={Twitter} className="ml-2"/>
          </div>
        </div>
      </div>
    );
  }
}
