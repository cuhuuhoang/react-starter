import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class StreamForm extends Component {
  renderError = ({error, touched}) => {
    if (touched && error) {
      return (
        <div className="invalid-feedback">
          {error}
        </div>
      )
    }
  }

  renderInput = ({input, label, meta}) => {
    const className = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`;
    return (
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input type="text" className={className} placeholder={label} {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title!';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);