import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from './ListItem';

import { UsersContainer, ComponentHeader, Table, THead } from './Styles';
import { getCurrentCompany } from '../../../../../Redux/actions/companyActions';

const UserList = () => {
  const company = useSelector((store) => store.company.company);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentCompany());
  }, [dispatch]);
  return (
    <UsersContainer>
      <ComponentHeader>Users</ComponentHeader>
      <Table>
        <thead>
          <tr>
            <THead>Name</THead>
            <THead>Email</THead>
            <THead>Usertype</THead>
          </tr>
        </thead>
        <tbody>
          {company !== null &&
            company.employees.map((employee) => (
              <ListItem key={employee._id} employee={employee} />
            ))}
        </tbody>
      </Table>
    </UsersContainer>
  );
};

export default UserList;
