import React from 'react';
import DadosPessoais from '../DadosPessoais/DadosPessoais'
import DadosEmpregos from '../DadosEmpregos/DadosEmpregos';
import FormsSubmit from '../FormSubmit/FormSubmit';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      inputEmail: '',
      inputCpf: '',
      inputEndereco: '',
      inputCidade: '',
      inputEstado: '',
      inputComplemento: '',
      resumoCurriculo: '',
      ultimoCargo: '',
      descricaoCargo: '',
      status: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.cleanButton = this.cleanButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    let valueChanged =  name === 'inputName' ? value.toUpperCase() : value;
    this.setState({
      [name]: valueChanged,
    });
  }

  handleOnBlur({ target }) {
    let { name, value } = target;


    if (value.match(/^\d/) !== null) {
      this.handleChange({ target: { name, value: '' } });
    } else {
      this.handleChange({ target: { name, value } });
    }
  }

  submitForm(event) {
    event.preventDefault();
    this.setState({ status: true })
  }

  cleanButton() {
    this.setState({
      inputName: '',
      inputEmail: '',
      inputCpf: '',
      inputEndereco: '',
      inputCidade: '',
      inputEstado: '',
      inputComplemento: '',
      resumoCurriculo: '',
      ultimoCargo: '',
      descricaoCargo: '',
      status: false,
    })
  }

  render() {
    const { status } = this.state
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <DadosPessoais handleChange={this.handleChange} state={this.state} handleOnBlur={this.handleOnBlur} />
          <DadosEmpregos handleChange={this.handleChange} />
          <button type="submit">Gerar Formulário</button>
          <button type="reset" onClick={this.cleanButton}>Limpar Formulário</button>
        </form>
        {status && <FormsSubmit state={this.state} />}
      </section>
    );
  }
}
export default Forms;
