import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrentCompany,
  getCompanyUsers,
} from '../../../../../Redux/actions/companyActions';

import UserCard from './Card';

import { GridContainer } from './Styles';

const Grid = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyUsers());
  }, [dispatch]);
  const users = useSelector((store) => store.company.employees);
  return (
    <GridContainer>
      <h1>This is to check the grid</h1>
      <div>
        {users !== null &&
          users.map((userArr, index) => (
            <div
              style={{
                display: 'flex',
                gap: 20,
                margin: '10px 0',
                boxSizing: 'border-box',
              }}
              key={index}
            >
              {userArr.map((user) => (
                <UserCard key={user._id} user={user} />
              ))}
            </div>
          ))}
      </div>
    </GridContainer>
  );
};

export default Grid;
