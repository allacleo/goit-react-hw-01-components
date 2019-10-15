import React from 'react';
import styles from './App.module.css';
import user from '../data/user.json';
import friends from '../data/friends.json';
import Profile from './Profile/Profile';
import stats from '../data/stats';
import Stats from '../components/Statistics/Stats';
import transaction from '../data/transaction.json';
import FriendList from '../components/Friends-List/FriendList';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';


const App = () => (
    <div className={styles.app}>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
       <TransactionHistory items={transaction} />
    </div>
  );




export default App;
