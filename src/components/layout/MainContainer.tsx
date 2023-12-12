import FeedbackList from '../feedback/FeedbackList';
import Header from './Header';

const MainContainer = () => {
  return (
    <main className='container'>
      <Header />
      <FeedbackList />
    </main>
  );
};

export default MainContainer;
