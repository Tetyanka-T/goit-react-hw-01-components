import PropTypes from 'prop-types';
import s from './Discription.module.css';

export default function Discription({ avatar, name, tag, location }) {
  return (
    <div className={s.description}>
      <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.prof}>@{tag}</p>
      <p className={s.prof}>{location}</p>
    </div>
  );
}

Discription.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
