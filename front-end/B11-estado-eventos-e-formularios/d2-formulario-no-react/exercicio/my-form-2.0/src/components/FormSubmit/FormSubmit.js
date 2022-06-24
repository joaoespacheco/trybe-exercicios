import React from 'react';

class FormsSubmit extends React.Component {
  render() {
    const { state } = this.props;
    const {inputName, inputEmail, inputCpf, inputEndereco, inputCidade, inputEstado, inputComplemento, resumoCurriculo, ultimoCargo, descricaoCargo} = state
    return (
      <div>
        <ul>
         <li>Nome Completo:{inputName}</li>
         <li>Email: {inputEmail}</li>
         <li>CPF: {inputCpf}</li>
         <li>Endereço: {inputEndereco}</li>
         <li>Cidade: {inputCidade}</li>
         <li>Estado: {inputEstado}</li>
         <li>Complemento: {inputComplemento}</li>
         <li>Resumo do currículo: {resumoCurriculo}</li>
         <li>Último cargo: {ultimoCargo}</li>
         <li>Descrição do cargo: {descricaoCargo}</li>
        </ul>
      </div>
    );
    }
}

export default FormsSubmit;
