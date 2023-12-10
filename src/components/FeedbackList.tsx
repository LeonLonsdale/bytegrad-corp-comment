import { useEffect, useState } from 'react';
import FeedbackItem from './FeedbackItem';
import Spinner from './Spinner';

type FeedbackListProps = {};

const FeedbackList = ({}: FeedbackListProps) => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
        );
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ol className='feedback-list'>
      {isLoading && <Spinner />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
