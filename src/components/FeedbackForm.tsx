import { useState } from 'react';

type FeedbackFormProps = {};

const FeedbackForm = ({}: FeedbackFormProps) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
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
        <p className='u-italic'>150</p>
        <button type='submit' className=''>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
