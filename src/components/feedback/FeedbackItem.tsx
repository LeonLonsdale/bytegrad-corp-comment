import { TriangleUpIcon } from '@radix-ui/react-icons';
import { MAX_CHARACTERS } from '../../lib/constants';
import { TFeedbackItem } from '../../lib/types';
import { useState } from 'react';

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const capitalLetter = feedbackItem.company.charAt(0).toUpperCase();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <li
      onClick={handleClick}
      className={`feedback ${isOpen ? 'feedback--expand' : ''}`}
    >
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
      <p>
        {`${feedbackItem.daysAgo > 1 ? `${feedbackItem.daysAgo}d` : 'new'}`}
      </p>
    </li>
  );
};

export default FeedbackItem;
