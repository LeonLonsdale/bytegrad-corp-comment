import { createContext, useContext, useMemo, useState } from 'react';
import { getUniquesFromArray } from '../lib/util';
import { TFeedbackItem } from '../lib/types';
import { FEEDBACK_API_URL } from '../lib/constants';
import { useFeedbackItems } from '../lib/hooks';

type TFeedbackItemsContext = {
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleSelectCompany: (company: string) => void;
  selectedCompany: string;
  filteredFeedbackItems: TFeedbackItem[];
};

type TFeedbackItemsProviderProps = {
  children: React.ReactNode;
};

const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(null);

const FeedbackItemsContextProvider = ({
  children,
}: TFeedbackItemsProviderProps) => {
  const [selectedCompany, setSelectedCompany] = useState('');

  const { feedbackItems, isLoading, errorMessage, setFeedbackItems } =
    useFeedbackItems();

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany,
          )
        : feedbackItems,
    [feedbackItems, selectedCompany],
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((feedbackItem) => feedbackItem.company)
        .filter(getUniquesFromArray),
    [feedbackItems],
  );

  const handleSelectCompany = (company: string) => setSelectedCompany(company);

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

  return (
    <FeedbackItemsContext.Provider
      value={{
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
        handleSelectCompany,
        selectedCompany,
        filteredFeedbackItems,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
};

const useFeedbackItemsContext = () => {
  const value = useContext(FeedbackItemsContext);
  if (!value)
    throw new Error(
      'You have used FeedbackItemsContext outside of Provider. The context can only be used within a child of the FeedbackItemsContextProvider',
    );
  return value;
};

// eslint-disable-next-line react-refresh/only-export-components
export { useFeedbackItemsContext, FeedbackItemsContextProvider };
