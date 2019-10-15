import React from 'react';
import T from 'prop-types';

import styles from './FriendList.module.css';
import FriendListItem from '../Friends-List/FriendListItem';

const FriendList = ({ friends }) => {
  const friendsItem = friends.map(
    ({ avatar, name, status, id, isOnline}) => {
      return (
        <li key={id} className={styles.item}>
          <FriendListItem
            status={status}
            avatar={avatar}
            name={name}
            id={id}
            isOnline={isOnline}
          />
        </li>
      );
    },
  );

  return <ul className={styles.friendlist}>{friendsItem}</ul>;
};

// FriendList.T = {
//   friends: T.arrayOf(T.object).isRequired,
// };

export default FriendList;

