import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrentCompany,
  getCompanyUsers,
} from '../../../../../Redux/actions/companyActions';

import UserCard from './Card';

const Grid = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentCompany());
    dispatch(getCompanyUsers());
  }, [dispatch]);
  const company = useSelector((store) => store.company.company);
  const users = useSelector((store) => store.company.employees);
  return (
    <div>
      <h1>This is to check the grid</h1>
      <ul>
        {company !== null &&
          company.employees.slice(0, 5).map((employee) => (
            <li>
              <UserCard key={employee._id} user={employee} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Grid;
