import {
  GET_ACTION_NOTIFICATIONS,
  GET_MESSAGE_NOTIFICATIONS,
  NOTIFICATIONNS_COUNT,
  GET_NOTIFICATION_ACTION,
  NOTIFICATION_ERROR,
} from '../actions/types';

const initialState = {
  actionNotifications: [],
  actionNotCount: null,
  messageNotifications: [],
  messageNotCount: null,
  actionNotification: null,
  messageNotification: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTION_NOTIFICATIONS:
      return {
        ...state,
        actionNotifications: payload,
        loading: false,
      };
    case NOTIFICATIONNS_COUNT:
      return {
        ...state,
        actionNotCount: payload,
        loading: true,
      };
    case GET_NOTIFICATION_ACTION:
      return {
        ...state,
        actionNotification: payload,
        loading: false,
      };
    case NOTIFICATION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
