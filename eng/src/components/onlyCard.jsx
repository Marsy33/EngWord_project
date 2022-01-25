import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./others.css";

class OnlyCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    };
  }
  handleChange = () => {
    const { addWord } = this.props;
    this.setState({
      pressed: !this.state.pressed,
    });
    addWord();
  };
  render() {
    const { id, english, transcription, russian, addWord } = this.props;
    return (
      <div className="cardWord">
        <p className="cardEng">{english}</p>
        <p>{transcription}</p>
        <Button
          variant="success"
          className={addWord ? "selected" : ""}
          onClick={this.handleChange}
        >
          {this.state.pressed ? russian : "Check"}
        </Button>
      </div>
    );
  }
}

export default OnlyCard;
