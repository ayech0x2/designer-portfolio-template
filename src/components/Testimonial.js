import React from "react";
import Avatar from "../static/img/testimonial-avatar.png";
import Star from "../static/img/star.png";
import HalfStar from "../static/img/half-star.png";
export default class Testimonial extends React.Component {
  render() {
    return (
      <div className="container-fluid testimonial p-5 mb-5">
        <span className="container text-center testimonial-txt p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pellentesque eu enim eget luctus. Sed augue felis, facilisis et
          elementum vitae, aliquam sit amet ante. Sed iaculis eros sem,
          elementum consequat est consequat eu. Quisque aliquet a ipsum nec
          tincidunt. Nulla vitae rhoncus leo. Praesent dui sapien, bibendum quis
          tempus dictum.
        </span>
        <div className="testimonial-avatar">
          <img
            className="img-avatar"
            height={100}
            width={100}
            src={Avatar}
            alt="avatar"
          />
          <div className="testimonial-avatar-text">
            <span className="avatar-name m-1">Edward M.Brooks</span>
            <span className="avatar-desc m-1">Marketing House</span>
            <div className="stars-container">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={HalfStar} alt="star" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
