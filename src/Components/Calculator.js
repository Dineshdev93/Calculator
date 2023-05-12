import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
export default function Calculator() {
  const [result, setResult] = useState("");
  function handleclick(e) {
    setResult(result.toString().concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.toString().slice(0, result.length - 1));
  };
  const calculate = () => {
    try {
      setResult(eval(result.toString()));
    } catch (err) {
      setResult("error");
    }
  };
  return (
    <div className="container">
      <h1>Calculator</h1>
      <br />
      <Form.Control type="text" value={result} />
      <div className="keypad">
        <Button  onClick={clear} id="clear" variant="primary">
          Clear
        </Button>{" "}
        <Button   onClick={backspace} variant="danger">
          C
        </Button>{" "}
        <Button name="/" onClick={handleclick} variant="success">
          &divide;
        </Button>{" "}
        <Button   name="7" onClick={handleclick} variant="outline-warning">
          7
        </Button>{" "}
        <Button   name="8" onClick={handleclick} variant="outline-danger">
          8
        </Button>{" "}
        <Button   name="9" onClick={handleclick} variant="outline-info">
          9
        </Button>{" "}
        <Button name="*" onClick={handleclick} variant="warning">
          &times;
        </Button>{" "}
        <Button name="4" onClick={handleclick} variant="outline-info">
          4
        </Button>
        <Button name="5" onClick={handleclick} variant="outline-warning">
          5
        </Button>{" "}
        <Button name="6" onClick={handleclick} variant="outline-primary">
          6
        </Button>{" "}
        <Button name="-" onClick={handleclick} variant="info">
          &ndash;
        </Button>{" "}
        <Button name="1" onClick={handleclick} variant="outline-secondary">
          1
        </Button>{" "}
        <Button name="2" onClick={handleclick} variant="outline-success">
          2
        </Button>{" "}
        <Button name="3" onClick={handleclick} variant="outline-primary">
          3
        </Button>{" "}
        <Button name="+" onClick={handleclick} variant="secondary">
          +
        </Button>{" "}
        <Button name="0" onClick={handleclick} variant="outline-primary">
          0
        </Button>{" "}
        <Button name="." onClick={handleclick} variant="warning">
          .
        </Button>{" "}
        <Button onClick={calculate} id="calculate" variant="primary">
          =
        </Button>{" "}
      </div>
    </div>
  );
}
