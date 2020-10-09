import React, { useState, FormEvent } from 'react';

import Header from '../../components/Header';
import PeopleForm from '../../components/PeopleForm';
import PeopleItem from '../../components/PeopleItem';
import { People } from './../../components/PeopleItem/index';

import './styles.css';

import api from '../../services/api';


function FriendList() {
  const [peoples, setPeoples] = useState([]);

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [friend, setFriend] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('peoples', {
      params: {
        name,
        email,
        friend
      }
    });
    setPeoples(response.data);


  }

  return (
    <div id="page-friend-list" className="container">
      <Header />
      <PeopleForm />

      <main>
        {peoples.map((people: People) => {
          return <PeopleItem key={people.email} people={people} />;
        })}
      </main>
    </div>

  )
}

export default FriendList;