// This is a reactstrap Modal
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class StrapModal extends React.Component {
  toggle = () => {
    this.props.handleCard();
  };
  render() {
    console.log(this.props.element);
    return (
      <div>
        <Modal
          isOpen={this.props.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="work-modal-title" toggle={this.toggle}>Title</ModalHeader>
          <ModalBody className="work-modal">
            <img
              className=" mb-3"
              alt="modal-img"
              src={require(`../static/img/${this.props.element.image}.jpg`)}
            />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </ModalBody>
          <ModalFooter className="modal-footer">
            <span className="btn-rounded" onClick={this.toggle}>
              OK !
            </span>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
