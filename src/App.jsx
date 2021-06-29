import Profile from 'components/Profile/Profile';
import Statistic from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import './index.css';
import statistData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile />
      <Statistic title="Upload stats" stats={statistData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
