import React from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getActionNotificationById } from '../../../../../../../Redux/actions/notificationActions';

import { NotificationItem } from './Styles';

const NotificationCard = ({ notification }) => {
  // console.log(notification.notificationTask);
  const dispatch = useDispatch();

  return (
    <NotificationItem>
      {/* <Link to={`/notification/${notification.notificationTask}`}> */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>{notification.notificationType}</h2>
        <span>
          <Moment format='Do MMM, HH:mm'>{notification.date}</Moment>
        </span>
      </div>
      <p>A task has been assigned to you</p>
      {/* </Link> */}
    </NotificationItem>
  );
};

export default NotificationCard;
