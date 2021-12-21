import React from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class TablWord extends React.Component {
  render() {
    const { isSelected } = this.props;
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Word</th>
              <th>Transcription</th>
              <th>Translation</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>world</td>
              <td>[ wɜːld ]</td>
              <td>мир</td>
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary">Edit</Button>
                  <Button variant="secondary">Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>earth</td>
              <td>[ ɜːθ ]</td>
              <td>земля</td>
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary">Edit</Button>
                  <Button variant="secondary">Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>place</td>
              <td>[ pleɪs ]</td>
              <td>место</td>
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary">Edit</Button>
                  <Button variant="secondary">Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TablWord;
