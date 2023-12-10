import { TFeedbackItem } from '../../lib/types';
import FeedbackList from '../feedback/FeedbackList';
import Header from './Header';

type MainContainerProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleAddToList: (text: string) => void;
};

const MainContainer = ({
  feedbackItems,
  isLoading,
  errorMessage,
  handleAddToList,
}: MainContainerProps) => {
  return (
    <main className='container'>
      <Header handleAddTolist={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
};

export default MainContainer;
