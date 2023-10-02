import { createStore, createHook } from 'react-sweet-state';
import type { Action } from 'react-sweet-state';
import { getLocalStorage } from 'packages/local-storage';

const localStorage = getLocalStorage('APP');

const LAST_INQUIRY_KEY = 'last-inquiry';

const initialState: {
  inquiries: string[];
} = {
  inquiries: localStorage.getItem(LAST_INQUIRY_KEY) ?? []
};

const actions = {
  addLastInquiry:
    (inquiryId: string): Action<typeof initialState> =>
    ({ setState, getState }) => {
      const inquiries = getState().inquiries ?? [];
      const newInquiries = [inquiryId].concat(inquiries.filter((inquiry) => inquiry !== inquiryId));
      setState({
        inquiries: newInquiries
      });

      localStorage.setItem(LAST_INQUIRY_KEY, newInquiries);
    }
};

const Store = createStore({
  initialState,
  actions
});

export const useLastInquiry = createHook(Store);
