import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../Input/index';

import api from '../../services/api';



function PeopleForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [friend, setFriend] = useState('');


  function handleCreatePeople(e: FormEvent) {
    e.preventDefault();

    api.post('peoples', {
      name,
      email,
      friend
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    });
  }

  return (
    <div id="page-friend-form" className="container">
      <main>
        <form onSubmit={handleCreatePeople}>
          <fieldset>
            <legend>Dados da pessoa</legend>

            <Input name="name" label="Nome" value={name}
              onChange={(e) => { setName(e.target.value) }}
            />

            <Input name="email" label="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />



            <button className="button-insert" type="submit">Inserir Amigo(a)</button>
          </fieldset>

        </form>
      </main>
    </div>
  )
}

export default PeopleForm;