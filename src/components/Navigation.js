import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal
} from "reactstrap";
import Avatar from "../static/img/avatar.png";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <div className="container navigation-bar remove-padding">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <div className="avatar-container">
              <img
                alt="logo"
                className="circle-avatar"
                height={50}
                src={Avatar}
              />
              <div>
                <span>Lewis</span>
                <span>Nathaniel</span>
                <span>UI & UX Designer</span>
              </div>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavigationItems />
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <div className="input-icon-wrap d-flex p-5">
            <div className="input-icon-wrap-wrapper w-100 d-flex flex-row align-items-center">
              <input
                type="text"
                placeholder="What are you looking for!"
                className=" input-with-icon soft italic"
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export const NavigationItems = () => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink className="menu-item" href="/components/ ">
          work
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className="menu-item"
          href="https://github.com/reactstrap/reactstrap"
        >
          about me
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className="menu-item"
          href="https://github.com/reactstrap/reactstrap"
        >
          blog
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className="menu-item"
          href="https://github.com/reactstrap/reactstrap"
        >
          contact
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className="menu-item rounded-link"
          href="https://github.com/reactstrap/reactstrap"
          id="nav-lastchild"
        >
          hire me
        </NavLink>
      </NavItem>
    </Nav>
  );
};
