import React from 'react';
import PropTypes from 'prop-types';
import StatsList from './StatsList';

import s from './Profile.module.css';

export default function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.prof}>@{tag}</p>
        <p className={s.prof}>{location}</p>
      </div>
      <StatsList stats={stats} />
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
