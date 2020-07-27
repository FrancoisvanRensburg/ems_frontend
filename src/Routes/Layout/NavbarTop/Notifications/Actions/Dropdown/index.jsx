import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserActionNotifications } from '../../../../../../Redux/actions/notificationActions';

import NotificationCard from './NotificationCard';

import { ReactComponent as Logo } from '../../../../../../App/assets/images/logo.svg';

import { NotificationDropdown, DropdownContainer } from './Styles';

const Dropdown = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserActionNotifications());
  }, [dispatch]);
  const notifications = useSelector(
    (store) => store.notification.actionNotifications
  );
  return (
    <DropdownContainer>
      <NotificationDropdown>
        <div
          style={{
            // overflowY: 'scroll',
            height: '100%',
          }}
        >
          {notifications === null || notifications.length === 0 ? (
            <div>
              <div
                style={{
                  display: 'block',
                  margin: '50% 0',
                  textAlign: 'center',
                }}
              >
                <p>You have no new notifications</p>
                <div>
                  <Logo />
                </div>
              </div>
            </div>
          ) : (
            notifications.map((notification) => (
              <NotificationCard
                key={notification._id}
                notification={notification}
              />
            ))
          )}
        </div>
      </NotificationDropdown>
    </DropdownContainer>
  );
};

export default Dropdown;
