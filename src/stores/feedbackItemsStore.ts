import { create } from 'zustand';
import { TFeedbackItem } from '../lib/types';
import { FEEDBACK_API_URL } from '../lib/constants';
import { getUniquesFromArray } from '../lib/util';

type Store = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedbackItem[];
  addFeedback: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => Promise<void>;
};

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  selectedCompany: '',
  isLoading: false,
  errorMessage: '',

  getFilteredFeedbackItems: () => {
    const state = get();
    return state.selectedCompany
      ? state.feedbackItems.filter(
          (feedbackItem) => feedbackItem.company === state.selectedCompany,
        )
      : state.feedbackItems;
  },

  getCompanyList: () =>
    get()
      .feedbackItems.map((feedbackItem) => feedbackItem.company)
      .filter(getUniquesFromArray),

  addFeedback: async (text: string) => {
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

    await fetch(FEEDBACK_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });

    set((state) => ({
      feedbackItems: [...state.feedbackItems, newItem],
    }));
  },

  selectCompany: (company: string) => set(() => ({ selectedCompany: company })),

  addErrorMessage: (message: string) => set(() => ({ errorMessage: message })),

  updateFeedbackItems: (feedbackItems: TFeedbackItem[]) =>
    set(() => ({ feedbackItems: feedbackItems })),

  fetchFeedbackItems: async () => {
    try {
      set(() => ({ isLoading: true }));

      const response = await fetch(FEEDBACK_API_URL);
      const data = await response.json();

      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);

      set(() => ({ feedbackItems: data.feedbacks }));
    } catch (error) {
      set(() => ({
        errorMessage: (error as Error).message,
      }));
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
}));
