import React from "react";
import { Field, reduxForm } from "redux-form";

const Login = ({ handleSubmit }) => {
  //   React.useEffect(() => {
  //     console.log({ props });
  //   }, []);
  const rendreInput = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" {...input} />
        <div>{meta.touched && meta.error}</div>
      </div>
    );
  };

  const onSubmit = formValues => {
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field name="username" component={rendreInput} label="Username" />
      <Field name="password" component={rendreInput} label="Password" />
      <button className="btn btn-info" type="submit">
        Submit
      </button>
    </form>
  );
};

const validate = formValues => {
  const errors = {};
  if (!formValues.username) errors.username = "username required";
  if (!formValues.password) errors.password = "password required";
  return errors;
};

export default reduxForm({ form: "login", validate })(Login);
