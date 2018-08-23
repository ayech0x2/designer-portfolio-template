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
import Contact from "./Contact";
// import Contact from "./Contact";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false,
      contactModal: false
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
  handleMenu = name => {
    this.props.scrollTo(name);
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
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="menu-item"
                  onClick={() => this.handleMenu("work")}
                >
                  work
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="menu-item"
                  href="#"
                  onClick={() => this.handleMenu("about")}
                >
                  about me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => this.handleMenu("blog")}
                  className="menu-item"
                  href="#"
                >
                  blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="menu-item"
                  href="#"
                  onClick={this.toggleModal}
                >
                  contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="menu-item rounded-link"
                  href="{"
                  id="nav-lastchild"
                >
                  hire me
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="w-100">
          <Contact/>
        </Modal>
      </div>
    );
  }
}
