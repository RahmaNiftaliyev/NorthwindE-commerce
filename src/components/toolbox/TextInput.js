import React from "react";

function TextInput(props) {
  let wrapperClass = "form-group";

  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <input
          type="text"
          name={props.name}
          value={props.value}
          placeholder={props.placeHolder}
          onChange={props.onChange}
          className="form-control"
        />
        {props.error && <div className="alert alert-danger mt-1">{props.error}</div>}
      </div>
    </div>
  );
}

export default TextInput;
