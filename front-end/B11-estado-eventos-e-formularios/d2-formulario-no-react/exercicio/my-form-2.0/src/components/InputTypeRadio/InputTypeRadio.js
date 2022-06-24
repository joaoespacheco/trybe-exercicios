import React from 'react';

class InputRadio extends React.Component {
  render() {
    const { id, name, required, dataBase, handleChange} = this.props;
    return (
    <>
      <p>{`${id}:`}</p>
      {dataBase.map((elemento, index) => (<div key={elemento}>
      <input type="Radio" id={`${id}-${index}`} name={name} defaultValue={elemento} required={required} onChange={handleChange}></input>
      <label htmlFor={`${id}-${index}`}>{elemento}</label>
     </div>))}
    </>
    );
  }
}

export default InputRadio;
