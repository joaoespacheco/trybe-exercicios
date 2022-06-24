import React from 'react';

class Select extends React.Component {
  render() {
    const { id, name, dataBase, handleChange } = this.props;
    return (
      <label htmlFor={id}>
       <p>{`${id}:`}</p>
        <select name={name} onChange={handleChange}>
          {dataBase.map(({ estado, sigla }) => <option value={sigla}>{estado}</option>)}
        </select>
      </label>
    );
  }
}

export default Select;