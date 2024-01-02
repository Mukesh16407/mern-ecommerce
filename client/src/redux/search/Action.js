import { SEARCH_QUERY } from "./ActionType";

export const searchQuery = (payload) => {
  return { type: SEARCH_QUERY, payload };
};
