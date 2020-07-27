import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useOnClickOutside from '../../../../../../shared/hooks/onOutsideClick';

import { ReactComponent as AlertIcon } from '../../../../../../App/assets/images/alert.svg';

import { actionNotificationCount } from '../../../../../../Redux/actions/notificationActions';

import Dropdown from '../Dropdown';

import { NotificationIcon } from './Styles';

const Bubble = () => {
  const node = useRef();
  const notifications = useSelector(
    (store) => store.auth.user.actionnotifications
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionNotificationCount());
  }, [dispatch]);
  // const nots = useSelector(
  //   (store) => store.notification.actionNotCount.notcount
  // );

  const [displayNotificationDropdown, toggleNotificationDropdown] = useState(
    false
  );

  useOnClickOutside(node, () =>
    toggleNotificationDropdown(!displayNotificationDropdown)
  );

  return (
    <div style={{ position: 'relative' }}>
      <NotificationIcon
        onClick={() => toggleNotificationDropdown(!displayNotificationDropdown)}
      >
        <div
          style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            position: 'absolute',
            top: '0px',
            right: '0px',
          }}
        >
          {notifications === null ? 0 : notifications.length}
        </div>
        <AlertIcon />
      </NotificationIcon>
      {displayNotificationDropdown && (
        <div
          style={{ position: 'absolute', top: '30px', right: '-30px' }}
          ref={node}
        >
          <Dropdown />
        </div>
      )}
    </div>
  );
};

export default Bubble;
