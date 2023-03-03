import css from './friendslistitem.module.css';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={[css.status, isOnline && css.isOnline].join(' ')}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
