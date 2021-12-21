import React from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ThemeList extends React.Component {
  render() {
    return (
      <div>
        <h1>Languages Flashcards</h1>
        <ListGroup>
          <ListGroup.Item href="#link2">Anatomy</ListGroup.Item>
          <ListGroup.Item href="#link2">Business</ListGroup.Item>
          <ListGroup.Item href="#link2">Time, calendar</ListGroup.Item>
          <ListGroup.Item href="#link2">Geography</ListGroup.Item>
          <ListGroup.Item href="#link2">City</ListGroup.Item>
          <ListGroup.Item href="#link2">House, things</ListGroup.Item>
          <ListGroup.Item href="#link2">Food</ListGroup.Item>
          <ListGroup.Item href="#link2">Animals</ListGroup.Item>
          <ListGroup.Item href="#link2">Cinema</ListGroup.Item>
          <ListGroup.Item href="#link2">Cinema</ListGroup.Item>
          <ListGroup.Item href="#link2">Furniture</ListGroup.Item>
          <ListGroup.Item href="#link2">Music</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default ThemeList;
