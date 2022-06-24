import React from "react";
import InputText from "../InputTypeText/InputTypeText";
import InputRadio from "../InputTypeRadio/InputTypeRadio";
import Select from "../SelectTag/SelectTag";
import Estados from "../../data/estadosDoBrasil";

class DadosPessoais extends React.Component {
  render() {
    const { handleChange, state, handleOnBlur } = this.props;
    const { inputName, inputEndereco } =
      state;
    return (
      <fieldset>
        <h2>Dados Pessoais:</h2>
        <InputText
          name="inputName"
          id="Nome completo"
          maxLength="40"
          required={true}
          placeholder="Digite seu nome"
          handleChange={handleChange}
          value={inputName.toUpperCase()}
        />
        <InputText
          name="inputEmail"
          id="Email"
          maxLength="50"
          required={true}
          placeholder="Digite seu email"
          handleChange={handleChange}
        />
        <InputText
          name="inputCpf"
          id="CPF"
          maxLength="11"
          required={true}
          placeholder="Digite seu CPF"
          handleChange={handleChange}
        />
        <InputText
          name="inputEndereco"
          id="Endereço"
          maxLength="200"
          required={true}
          placeholder="Digite seu endereço"
          handleChange={handleChange}
          value={inputEndereco.replace(/[^\w\s]/gi, "")}
        />
        <InputText
          name="inputCidade"
          id="Cidade"
          maxLength="28"
          required={true}
          placeholder="Digite sua cidade"
          handleChange={handleOnBlur}
        />
        <Select
          name="inputEstado"
          id="Estado"
          dataBase={Estados}
          handleChange={handleChange}
        />
        <InputRadio
          name="inputComplemento"
          id="Complemento"
          dataBase={["Casa", "Apartamento"]}
          required={true}
          handleChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default DadosPessoais;
