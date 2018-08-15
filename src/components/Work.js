import React, { Fragment } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import styled from "styled-components";
import { data } from "./WorksData";
import StrapModal from "./StrapModal";

export default class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: "all",
      showModal: false,
      workTimes: [1]
    };
  }
  handleCategory = category => {
    this.setState({
      activeCategory: category
    });
  };
  handleCard = element => {
    this.setState({
      element: element,
      showModal: !this.state.showModal
    });
  };
  loadMore = ()=>{
    this.setState({
        workTimes:[...this.state.workTimes,1]
    })
  };
  render() {
    return (
      <div className="container work remove-padding">
        {this.state.showModal ? (
          <StrapModal
            handleCard={this.handleCard}
            modal={this.state.showModal}
            element={this.state.element}
          />
        ) : null}
        <div className="work-filter">
          <span onClick={() => this.handleCategory("all")}>All</span>
          <span onClick={() => this.handleCategory("app")}>App</span>
          <span onClick={() => this.handleCategory("website")}>Website</span>
          <span onClick={() => this.handleCategory("interaction")}>
            Interaction
          </span>
        </div>
        <div className="cards-container">
          {this.state.workTimes.map((ele, key) => {
            return (
              <Cards
                key={key}
                handleCard={this.handleCard}
                activeCategory={this.state.activeCategory}
              />
            );
          })}
        </div>
        <span onClick={this.loadMore} className="btn-none-rounded m-5">Load more work</span>
      </div>
    );
  }
}

const Cards = props => {
  return (
    <Fragment>
      {data.map((ele, key) => {
        return (
          <CardSC
            onClick={() => props.handleCard(ele)}
            key={key}
            category={ele.category}
            activecategory={props.activeCategory}
          >
            <CardImg
              src={require(`../static/img/${ele.image}.jpg`)}
              alt="Card image cap"
              className="img-card"
            />
            <CardBody className="body-card">
              <span className="card-category">{ele.category}</span>
              <span className="card-title">Title</span>
            </CardBody>
          </CardSC>
        );
      })}
    </Fragment>
  );
};

const CardSC = styled(Card)`
  ${props =>
    props.activecategory === props.category || props.activecategory === "all"
      ? "opacity:1;visibility:visible"
      : "opacity:0;visibility:hidden;position:absolute"};
  transition: opacity 600ms, visibility 600ms;
`;
