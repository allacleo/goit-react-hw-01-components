import React from 'react';
import T from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline, alt}) => {
return (
  <>
  <span className={styles.status}></span>
    <img src={avatar} className={styles.friendAvatar} alt={name}/>
    <p>{name}</p>
    </>
);

};

FriendListItem.defaultProps={
  alt: 'avatar image',
};

FriendListItem.T = {
  avatar: T.string,
  status: T.string.isRequired,
  name: T.string.isRequired,
};

export default FriendListItem;