/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css';

export interface People {
  name: string;
  email: string;
}

interface PeopleItemProps {
  people: People;
}

const PeopleItem: React.FC<PeopleItemProps> = ({ people }) => {
  return (
    <article className="people-item">
      <strong>{people.name}</strong>
      <p>{people.email}</p>
    </article>
  );

}

export default PeopleItem;