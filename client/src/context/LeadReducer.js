import { TOGGLE_FILTER } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        filterLead: !state.filterLead,
      };
    default:
      return state;
  }
};
