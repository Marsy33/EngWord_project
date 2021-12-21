import React from "react";
import { Carousel, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import fon from "./assets/fon.jpeg";
import "./others.css";

class CardWord extends React.Component {
  render() {
    return (
      <div>
        <Carousel className="wordCarousel">
          <Carousel.Item>
            <img className="d-block w-100" src={fon} alt="First slide" />
            <Carousel.Caption>
              <h3 className="cardWord">Word </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={fon} alt="Second slide" />

            <Carousel.Caption>
              <h3>[wɜːd]</h3>
              <p>слово, речь, текст</p>
              <p>I don't like the word (unofficial)</p>
              <p>
                I do not speak a word of Italian, nor do I know anything about
                the different regions etc as I would with France.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <ButtonGroup size="lg" className="mb-2">
            <Button variant="dark">Don't know</Button>
            <Button variant="secondary">Remaining cards</Button>
            <Button className="btnKnow" variant="dark">
              Know
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default CardWord;
