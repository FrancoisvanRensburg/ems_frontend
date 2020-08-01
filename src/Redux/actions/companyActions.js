import axios from 'axios';
import { setAlert } from './alertActions';

import {
  GET_COMPANY,
  COMPANY_ERROR,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_COMPANY_USERS,
} from './types';

export const getCurrentCompany = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/company');

    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update current company information
export const updateCompany = (values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/company', values, config);

    dispatch({
      type: GET_COMPANY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Register a user to the company
export const registerUser = (values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/register/user', values, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('User added', 'green'));
  } catch (err) {
    const errors = err.response.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'red')));
    }
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getCompanyUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/company/users');

    dispatch({
      type: GET_COMPANY_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMPANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
