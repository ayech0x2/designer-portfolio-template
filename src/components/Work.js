import React from "react";
import {
  Card,
  CardImg,
  CardBody,
} from "reactstrap";
import WebDesign from "../static/img/web-design.jpg";

export default class Work extends React.Component {
  render() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className="container work remove-padding">
        <div className="work-filter">
          <span>All</span>
          <span>App</span>
          <span>Website</span>
          <span>Interaction</span>
        </div>
        <div className="cards-container">
          {cards.map((card, key) => {
            return (
              <Card key={key}>
                <CardImg
                  src={WebDesign}
                  alt="Card image cap"
                  className="img-card"
                />
                <CardBody className="body-card">
                  <span className="card-category">Category</span>
                  <span className="card-title">Title</span>
                </CardBody>
              </Card>
            );
          })}
          <span className="btn-none-rounded m-5">Load more work</span>
        </div>
      </div>
    );
  }
}
