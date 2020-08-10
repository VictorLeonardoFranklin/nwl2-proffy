import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/65988709?s=460&u=9098f72cbe2b2a29545289c89c82e37e650bc5d4&v=4" alt="Victor Leonardo" />
        <div>
          <strong>Victor Leonardo</strong>
          <span>Inteligência Artificial</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
          <br /><br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
      <footer>
        <p>
          Preço/Hora
            <strong>R$: 80,00</strong>
        </p>
        <button type="button" >
          <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
      </footer>
    </article>
  );
}

export default TeacherItem;