import { TriangleUpIcon } from '@radix-ui/react-icons';
import { MAX_CHARACTERS } from '../lib/constants';

type FeedbackItem = {
  upvoteCount: number;
  companyName: string;
  text: string;
  daysAgo: number;
};

type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const capitalLetter = feedbackItem.companyName.charAt(0).toUpperCase();

  return (
    <li className='feedback'>
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>

      <div>
        <p>{capitalLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.text.slice(0, MAX_CHARACTERS)}</p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
};

export default FeedbackItem;
