import { FriendsListItem } from './friendslistitem';
import css from './friendslist.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  id: PropTypes.string,
};
