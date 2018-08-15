import React, { Fragment } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import Design0 from "../static/img/design0.jpg";
import Design1 from "../static/img/design1.jpg";
import Design2 from "../static/img/design2.jpg";
import Design3 from "../static/img/design3.jpg";
import Design4 from "../static/img/design4.jpg";
import Design5 from "../static/img/design5.jpg";
import Design6 from "../static/img/design6.jpg";
import Design7 from "../static/img/design7.jpg";
import Design8 from "../static/img/design8.jpg";

export default class Work extends React.Component {
  render() {
    return (
      <div className="container work remove-padding">
        <div className="work-filter">
          <span>All</span>
          <span>App</span>
          <span>Website</span>
          <span>Interaction</span>
        </div>
        <div className="cards-container">
          <Cards />
        </div>
        <span className="btn-none-rounded m-5">Load more work</span>
      </div>
    );
  }
}

const Cards = () => {
  const i = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Fragment>
      {i.map((ele, key) => {
        return (
          <Card key={key}>
            <CardImg src={require(`../static/img/design${ele}.jpg`)} alt="Card image cap" className="img-card" />
            <CardBody className="body-card">
              <span className="card-category">Category</span>
              <span className="card-title">Title</span>
            </CardBody>
          </Card>
        );
      })}
    </Fragment>
  );
};
