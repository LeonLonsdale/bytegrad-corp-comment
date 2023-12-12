import { useState } from 'react';
import { MAX_CHARACTERS } from '../../lib/constants';
import { findString } from '../../lib/util';

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

const FeedbackForm = ({ onAddToList }: FeedbackFormProps) => {
  const [text, setText] = useState('');
  const [showIsValid, setShowIsValid] = useState<boolean>();
  const [showIsNotValid, setShowIsNotValid] = useState<boolean>();
  const charRemaining: number = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;

    if (value.length > MAX_CHARACTERS) return;

    setText(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!findString(text, '#') || text.length < 5) {
      setShowIsNotValid(true);
      setTimeout(() => setShowIsNotValid(false), 2000);
      return;
    }

    setShowIsValid(true);
    setTimeout(() => setShowIsValid(false), 2000);
    onAddToList(text);
    setText('');
  };

  return (
    <form
      className={`form ${showIsValid ? 'form--valid' : ''} ${
        showIsNotValid ? 'form--invalid' : ''
      }`}
      onSubmit={handleSubmit}
    >
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
