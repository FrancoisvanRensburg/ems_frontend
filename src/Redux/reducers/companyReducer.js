import {
  GET_COMPANY,
  COMPANY_ERROR,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_COMPANY_USERS,
  ADD_COMPANY_USER,
} from '../actions/types';

const initialState = {
  company: null,
  employees: [],
  projects: [],
  loading: true,
  errors: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMPANY:
      return {
        ...state,
        company: payload,
        loading: false,
      };
    case COMPANY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        company: null,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        company: { ...state.company, employees: payload },
        loading: false,
      };
    case ADD_COMPANY_USER:
      return {
        ...state,
        employees: payload,
        loading: false,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        employees: null,
      };
    case GET_COMPANY_USERS:
      return {
        ...state,
        employees: payload,
        loading: false,
      };
    default:
      return state;
  }
}
