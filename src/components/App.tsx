import Footer from './layout/Footer';
import HashtagList from './hashtags/HashtagList';
import MainContainer from './layout/MainContainer';
import { FeedbackItemsContextProvider } from '../context/FeedbackItemsContext';

const App = () => {
  return (
    <div className='app'>
      <Footer />
      <FeedbackItemsContextProvider>
        <MainContainer />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
};

export default App;
