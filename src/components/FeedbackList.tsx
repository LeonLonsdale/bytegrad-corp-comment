import FeedbackItem from './FeedbackItem';

type FeedbackListProps = {
  upvotes: number;
};

const feedbackItems = [
  {
    upvoteCount: 593,
    companyName: 'ByteGrad',
    text: 'test test test',
    daysAgo: 4,
  },
  {
    upvoteCount: 222,
    companyName: 'Nike',
    text: 'test test test banana shoes',
    daysAgo: 48,
  },
];

const FeedbackList = ({}: FeedbackListProps) => {
  return (
    <ol className='feedback-list'>
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
