import React from "react";
import data from "./data.jsx";
import { Table, ButtonGroup, Button } from "react-bootstrap";

export default class Word extends React.Component {
  constructor(props) {
    super(props);
    const { english, transcription, russian } = this.props;

    this.state = {
      visibility: false,
      english: english,
      transcription: transcription,
      russian: russian,
    };
  }
  handleClick = () => {
    this.setState({
      visibility: !this.state.visibility,
    });
  };
  onCancel = () => {
    const { english, transcription, russian } = this.props;
    this.setState({
      visibility: !this.state.visibility,
      english: english,
      transcription: transcription,
      russian: russian,
    });
  };

  onChangeEnglish = (evt) => {
    this.setState({
      english: evt.target.value,
      transcription: this.state.transcription,
      russian: this.state.russian,
    });
  };
  onChangeTrunscription = (evt) => {
    this.setState({
      english: this.state.english,
      transcription: evt.target.value,
      russian: this.state.russian,
    });
  };
  onChangeRussian = (evt) => {
    this.setState({
      english: this.state.english,
      transcription: this.state.transcription,
      russian: evt.target.value,
    });
  };
  onSave = () => {
    this.setState({
      visibility: false,
    });
  };

  render() {
    const { id, english, transcription, russian } = this.props;
    if (this.state.visibility) {
      return (
        <tr key={id}>
          <td>
            <input value={this.state.english} onChange={this.onChangeEnglish} />
          </td>
          <td>
            {" "}
            <input
              value={this.state.transcription}
              onChange={this.onChangeTrunscription}
            />
          </td>
          <td>
            <input value={this.state.russian} onChange={this.onChangeRussian} />
          </td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={this.onCancel}>
                Cancel
              </Button>

              <Button variant="secondary" onClick={this.onSave}>
                Save
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={id}>
          <td>{this.state.english}</td>
          <td>{this.state.transcription}</td>
          <td>{this.state.russian}</td>
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
