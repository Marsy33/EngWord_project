import React from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.jsx";
import Word from "./word.jsx";

function TablWord() {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Word</th>
            <th>Transcription</th>
            <th>Translation</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Word key={item.id} {...item} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TablWord;
