import {
  TOGGLE_FILTER,
  SEARCH_LEAD,
  CLEAR_SEARCH,
  ADD_LEAD,
  REMOVE_LEAD,
  UPDATE_LEAD,
} from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, payload],
      };
    case REMOVE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== payload),
      };
    case UPDATE_LEAD:
      return {
        ...state,
        leads: state.leads.map((lead) =>
          lead.id === payload.id ? payload : lead
        ),
      };
    case SEARCH_LEAD:
      const reg = new RegExp(`${payload}`, "gi");
      return {
        ...state,
        search: state.leads.filter((lead) => lead.name.match(reg)),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        filterLead: !state.filterLead,
      };
    default:
      return state;
  }
};
