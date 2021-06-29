import React from 'react';
import Discription from './Discription';
import StatsList from './StatsList';
import user from 'data/user.json';
import s from './Profile.module.css';

export default function Profile() {
  return (
    <div className={s.profile}>
      <Discription
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
      />
      <StatsList stats={user.stats} />
    </div>
  );
}
