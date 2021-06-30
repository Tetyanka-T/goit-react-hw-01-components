import Profile from 'components/Profile/Profile';
import Statistic from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import './index.css';
import user from './data/user.json';
import statistData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statistData} />
      <Statistic stats={statistData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
