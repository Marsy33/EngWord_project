import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./others.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    };
  }
  handleChange = () => {
    this.setState({
      pressed: !this.state.pressed,
    });
  };
  render() {
    const { english, transcription, russian } = this.props;
    return (
      <div className="cardWord">
        <p className="cardEng">{english}</p>
        <p>{transcription}</p>
        <Button variant="success" onClick={this.handleChange}>
          {this.state.pressed ? russian : "Check"}
        </Button>
      </div>
    );
  }
}

export default Card;
