import React from 'react';
import TextArea from '../TextAreaTag/TextAreaTag';

class DadosEmpregos extends React.Component {
  render() {
   const { handleChange } = this.props;
    return (
    <fieldset>
      <h2>Dados empregaticíos:</h2>
      <TextArea name="resumoCurriculo" id="curriculo" description="Resumo do curriculo" maxLength={1000} required={true} handleChange={handleChange}/>
      <TextArea name="ultimoCargo" id="cargo" description="Ultimo cargo" maxLength={40} required={true} handleChange={handleChange}/>
      <TextArea name="descricaoCargo" id="cargoInfo" description="Descrição do cargo" maxLength={500} required={true} handleChange={handleChange}/>
    </fieldset>
    );
  }
}

export default DadosEmpregos;
