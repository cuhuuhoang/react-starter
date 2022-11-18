import Form from "react-bootstrap/Form";
import React from "react";
import {Col, Row} from "react-bootstrap";

export const numberInput = ({input, label, meta, placeholder}) => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="4">{label}</Form.Label>
      <Col sm="8">
        <Form.Control type="number" placeholder={placeholder} {...input} />
      </Col>
      {renderError(meta)}
    </Form.Group>
  );
};

export const checkbox = ({input, label, meta}) => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="4">{label}</Form.Label>
      <Col sm="8">
        <Form.Check type="checkbox" {...input} />
      </Col>
      {renderError(meta)}
    </Form.Group>
  );
};

export const renderError = ({error, touched}) => {
  if (touched && error) {
    return (
      <div className="invalid-feedback">
        {error}
      </div>
    )
  }
};
