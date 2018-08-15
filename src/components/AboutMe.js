import React from "react";
import ImgAbout from "../static/img/aboutme.jpg";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div className="container about-me remove-padding mb-5 d-flex flex-column flex-lg-row align-items-center">
        <div className="about-left-side m-4 col-12">
          <img src={ImgAbout} alt="about-me" className="img-auto"/>
        </div>
        <div className="about-right-side m-4">
          <div className="about-me-texts">
            <span className="txt-about">about me</span>
            <span className="who-am-i">who am i</span>
            <span className="normal-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              pellentesque eu enim eget luctus. Sed augue felis, facilisis et
              elementum vitae, aliquam sit amet ante. Sed iaculis eros sem,
              elementum consequat est consequat eu. Quisque aliquet a ipsum nec
              tincidunt. Nulla vitae rhoncus leo. Praesent dui sapien, bibendum
              quis tempus dictum, auctor ac dui. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Donec at
              mauris porta, ullamcorper sem quis, lobortis sem. Donec sit amet
              aliquet dui, at varius est. Phasellus porttitor finibus neque vel
              vehicula. Duis in nulla egestas, dignissim elit at, imperdiet
              eros. Integer tristique posuere purus. Suspendisse placerat, quam
              vitae ullamcorper sollicitudin, dui ligula molestie massa, sit
              amet laoreet nibh ex vitae dui. Aenean laoreet pellentesque lacus,
              eget varius massa mattis quis. Nunc ultrices urna eu nunc lobortis
              pulvinar. Duis viverra, quam non imperdiet scelerisque, urna nunc
              consequat velit, in mollis erat nibh in libero.
            </span>
          </div>
          <div className="about-btn-container mt-5 d-flex flex-column flex-sm-row align-items-center">
              <span className="btn-rounded m-2 col-6 text-center">hire me</span>
              <span className="btn-none-rounded m-2 col-6 text-center">see my resume</span>
          </div>
        </div>
      </div>
    );
  }
}
