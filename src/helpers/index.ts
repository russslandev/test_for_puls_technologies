import { tabNames } from '../constants';
import { LoanRequest } from '../types';

export const getLoansTabContent = (loanRequests: LoanRequest[]) => {
  const loanTabs: { [propName: string]: LoanRequest[] } = {};
  tabNames.forEach((item) => {
    const matchingRequests = loanRequests.filter((request) => item.matches.includes(request.status));
    if (matchingRequests.length) {
      loanTabs[item.tab] = matchingRequests;
    }
  });
  return loanTabs;
};
