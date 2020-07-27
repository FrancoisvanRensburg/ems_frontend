import axios from 'axios';

import {
  GET_ACTION_NOTIFICATIONS,
  GET_MESSAGE_NOTIFICATIONS,
  NOTIFICATIONNS_COUNT,
  GET_NOTIFICATION_ACTION,
  NOTIFICATION_ERROR,
} from './types';

// Get user notifications
export const getUserActionNotifications = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/notifications');

    dispatch({
      type: GET_ACTION_NOTIFICATIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTIFICATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const actionNotificationCount = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/notifications/count');

    dispatch({
      type: NOTIFICATIONNS_COUNT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTIFICATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getActionNotificationById = (notificationId) => async (
  dispatch
) => {
  try {
    const res = await axios.get(`/api/notifications/${notificationId}`);

    dispatch({
      type: GET_NOTIFICATION_ACTION,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NOTIFICATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
