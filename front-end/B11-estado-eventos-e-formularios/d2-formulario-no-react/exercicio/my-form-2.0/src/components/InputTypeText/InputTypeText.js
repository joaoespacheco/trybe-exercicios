import React from "react";

class InputText extends React.Component {
  render() {
    const { id, name, maxLength, required, placeholder, handleChange, value } =
      this.props;
    return (
      <label htmlFor={id}>
        <p>{`${id}:`}</p>
        <input
          name={name}
          type="text"
          maxLength={maxLength}
          required={required}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        ></input>
      </label>
    );
  }
}

export default InputText;
