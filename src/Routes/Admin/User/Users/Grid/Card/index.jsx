import React, { useState } from 'react';

import { usrTpe, userLogo } from '../../../../../../shared/hooks/userHelper';

import {
  Card,
  CardContainer,
  LogoContainer,
  Username,
  Email,
  BottomLine,
} from './Styles';

const UserCard = ({ user: { name, usertype, email } }) => {
  return (
    <Card>
      <CardContainer>
        <LogoContainer usertype={usertype}>{userLogo(name)}</LogoContainer>
        <div>
          <Username>{name}</Username>
          <Email>{email}</Email>
          <p>{usrTpe(usertype)}</p>
        </div>
      </CardContainer>
      <BottomLine usertype={usertype} />
    </Card>
  );
};

export default UserCard;
