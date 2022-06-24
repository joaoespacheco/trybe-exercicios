import React from 'react';

class TextArea extends React.Component {
  render() {
    const { id, name, description, maxLength, required, handleChange} = this.props;
    return (
      <label htmlFor={id}>
        <p>{description}:</p>
        <textarea
          name={name}
          maxLength={`${maxLength}`}
          required={required}
          placeholder="Escreva o texto aqui..."
          cols="100"
          rows={(maxLength / 150)}
          onClick={() => { if(name === 'ultimoCargo') alert('Preencha com cuidado esta informação')} }
          onChange={handleChange}
        ></textarea>
      </label>
    );
  }
}

export default TextArea;
