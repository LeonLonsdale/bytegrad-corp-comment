import { TriangleUpIcon } from '@radix-ui/react-icons';
import { MAX_CHARACTERS } from '../lib/constants';

type FeedbackItem = {
  upvoteCount: number;
  company: string;
  badgeLetter: string;
  text: string;
  daysAgo: number;
  id: number;
};

type FeedbackItemProps = {
  feedbackItem: FeedbackItem;
};

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const capitalLetter = feedbackItem.company.charAt(0).toUpperCase();

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
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text.slice(0, MAX_CHARACTERS)}</p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
};

export default FeedbackItem;
