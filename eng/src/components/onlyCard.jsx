import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class OnlyCard extends React.Component {
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
    const { id, english, transcription, russian } = this.props;
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

export default OnlyCard;
