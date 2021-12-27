import React from "react";
import data from "./data.jsx";
import { Table, ButtonGroup, Button } from "react-bootstrap";

export default class Word extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
    };
  }
  handleClick = () => {
    this.setState({
      visibility: !this.state.visibility,
    });
  };
  render() {
    const { id, english, transcription, russian } = this.props;
    if (this.state.visibility) {
      return (
        <tr key={id}>
          <td>
            <input defaultValue={english} />
          </td>
          <td>
            {" "}
            <input defaultValue={transcription} />
          </td>
          <td>
            <input defaultValue={russian} />
          </td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={this.handleClick}>
                Cancel
              </Button>

              <Button variant="secondary">Save</Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={id}>
          <td>{english}</td>
          <td>{transcription}</td>
          <td>{russian}</td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={this.handleClick}>
                Edit
              </Button>

              <Button variant="secondary">Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    }
  }
}
