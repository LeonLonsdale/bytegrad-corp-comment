import { useState } from 'react';
import { MAX_CHARACTERS } from '../lib/constants';

type FeedbackFormProps = {};

const FeedbackForm = ({}: FeedbackFormProps) => {
  const [text, setText] = useState('');
  const charRemaining: number = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;
    if (value.length > MAX_CHARACTERS) return;

    setText(value);
  };

  return (
    <form className='form' onSubmit={() => {}}>
      <textarea
        id='feedback-textarea'
        placeholder='placeholder'
        spellCheck={false}
        onChange={handleChange}
        value={text}
      />
      <label htmlFor='feedback-textarea'>
        Enter your feedback here. Remember to #hashtag the company.
      </label>
      <div>
        <p className='u-italic'>{charRemaining}</p>
        <button type='submit' className=''>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
