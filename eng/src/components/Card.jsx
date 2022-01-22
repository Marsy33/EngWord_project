import React from "react";
import "./others.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OnlyCard from "./onlyCard";
import data from "./data.jsx";
import Magical from "./assets/magical.jpg";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number1: 0,
    };
  }

  back = () => {
    this.setState({
      number1: this.state.number1 - 1,
    });
  };
  next = () => {
    this.setState({
      number1: this.state.number1 + 1,
    });
  };
  render() {
    if (this.state.number1 === data.length) {
      return <img className="imgMagical" src={Magical} />;
    } else {
      return (
        <div>
          <OnlyCard {...data[this.state.number1]} />

          <div>
            {this.state.number1 === 0 ? null : (
              <Button variant="dark" onClick={this.back}>
                {" "}
                Back
              </Button>
            )}

            <span>
              {this.state.number1 + 1}/{data.length}
            </span>
            <Button variant="dark" onClick={this.next}>
              Next
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default Card;
