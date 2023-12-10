import FeedbackList from './FeedbackList';
import Header from './Header';

type MainContainerProps = {};

const MainContainer = ({}: MainContainerProps) => {
  return (
    <main className='container'>
      <Header />
      <FeedbackList />
    </main>
  );
};

export default MainContainer;
