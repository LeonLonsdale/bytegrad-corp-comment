import Footer from './layout/Footer';
import HashtagList from './hashtags/HashtagList';
import MainContainer from './layout/MainContainer';
import { useEffect } from 'react';
import { useFeedbackItemsStore } from './stores/feedbackItemsStore';

const App = () => {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems,
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className='app'>
      <Footer />
      <MainContainer />
      <HashtagList />
    </div>
  );
};

export default App;
