import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// first name and last name
export const TextControls = () => {
  return (
    <Form>
      <Form.Group className="first-name" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="first-name" placeholder="Wen" />
      </Form.Group>

      <Form.Group className="last-name" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="last-name" placeholder="Zhang" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
// employer detail boxes (name, address, city, etc.)

// suggest words boxes

// upload resume button
// generate/downlaod resume button
