import React from 'react';

import AddUser from './AddUser';
import Users from './Users';

import { UserBoard } from './Styles';

const UserAdmin = () => {
  return (
    <UserBoard>
      <AddUser />
      <Users />
    </UserBoard>
  );
};

export default UserAdmin;
