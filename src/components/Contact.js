import React from "react";
import Man from "../static/img/designer.jpg";
import Phone from "../static/img/telephone-symbol-button.svg";
import Envelope from "../static/img/close-envelope.svg";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <div className="contact d-flex flex-column-reverse flex-md-row">
        <div className="contact-left ">
          <div className="d-flex flex-column m-2  ml-sm-5 m-sm-3">
            <span className="contact-txt">Let's talk</span>
            <span className="call">Call me or send me a request</span>
          </div>
          <div className="d-flex flex-column m-2 ml-sm-5 m-sm-3 ">
            <div className="d-flex flex-row align-items-center">
              <img height={15} src={Phone} alt="phone"/>
              <span>(200) 100 3000 </span>
            </div>
            <div className="d-flex flex-row align-items-center">
              <img height={15} src={Envelope} alt="envelope"/>
              <span>designer@ui43.com</span>
            </div>
          </div>
          <div className="d-flex flex-column m-2 ml-sm-5 m-sm-3 contact-email">
            <span > Address e-mail</span>
            <input defaultValue="Address e-mail" className="rounded-input text-left mt-2 w-100"/>
          </div>
          <div className="d-flex flex-column m-2 ml-sm-5 m-sm-3 contact-email">
            <span> Request </span>
            <textarea defaultValue="hello" className="rounded-input  mt-2 w-100 d-flex justify-content-start "/>
          </div>
            <div className="d-flex flex-row w-100 mb-2 ml-sm-5  justify-content-center justify-content-sm-start">
                <span className="btn-rounded">send</span>
            </div>
        </div>
        <div className="contact-right d-flex justify-content-center align-items-center" >
        <img  src={Man} className="img-auto" alt="designer"/>
        </div>
      </div>
    );
  }
}
