import { useEffect, useState } from 'react';
import Footer from './layout/Footer';
import HashtagList from './HashtagList';
import MainContainer from './layout/MainContainer';
import { TFeedbackItem } from '../lib/types';
import { FEEDBACK_API_URL } from '../lib/constants';
import { getUniques } from '../lib/util';

const App = () => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const companyList = feedbackItems
    .map((feedbackItem) => feedbackItem.company)
    .filter(getUniques);

  const handleAddToList = async (text: string) => {
    const company = text
      .split(' ')
      .find((word: string) => word.includes('#'))!
      .substring(1);

    const newItem: TFeedbackItem = {
      upvoteCount: 0,
      company,
      badgeLetter: company.charAt(0).toUpperCase(),
      text: text,
      daysAgo: 0,
      id: new Date().getTime(),
    };

    setFeedbackItems((curItems) => [...curItems, newItem]);

    await fetch(FEEDBACK_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(FEEDBACK_API_URL);
        const data = await response.json();

        if (!response.ok)
          throw new Error(`Something went wrong (${response.status})`);

        setFeedbackItems(data.feedbacks);
      } catch (error) {
        if (error instanceof Error) setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='app'>
      <Footer />
      <MainContainer
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList companyList={companyList} />
    </div>
  );
};

export default App;
