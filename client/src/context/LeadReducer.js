import {
  TOGGLE_FILTER,
  SEARCH_LEAD,
  CLEAR_SEARCH,
  ADD_LEAD,
  REMOVE_LEAD,
  UPDATE_LEAD,
  EDIT_LEAD,
  CLEAR_EDIT,
  GET_LEADS,
  LEADS_ERROR,
} from "../types";

const LeadReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_LEADS:
      return {
        ...state,
        leads: payload,
      };
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
    case EDIT_LEAD:
      return {
        ...state,
        editAble: payload,
      };
    case CLEAR_EDIT:
      return {
        ...state,
        editAble: null,
      };
    case SEARCH_LEAD:
      const reg = new RegExp(`${payload}`, "gi");
      return {
        ...state,
        search: state.leads.filter((lead) => lead.name.match(reg)),
      };
    case LEADS_ERROR:
      return {
        ...state,
        leads: [],
        errors: payload,
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

export default LeadReducer;
