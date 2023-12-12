import { useEffect, useState } from 'react';
import { TFeedbackItem } from './types';
import { FEEDBACK_API_URL } from './constants';

export const useFeedbackItems = () => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  return {
    feedbackItems,
    isLoading,
    errorMessage,
    setFeedbackItems,
  };
};
