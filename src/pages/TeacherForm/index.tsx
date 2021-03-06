import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preenceher o formulário de inscrição." />
      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input label='Nome Completo' name='name' />
          <Input label='Avatar' name='avatar' />
          <Input label='WhatsApp' name='whatsapp' />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input label='Matéria' name='subject' />
          <Input label='Custo da sua hora por aula' name='cost' />

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type='button'>Salvar cadastro</button>
        </footer>
      </main>
    </div>

  );
}

export default TeacherForm;