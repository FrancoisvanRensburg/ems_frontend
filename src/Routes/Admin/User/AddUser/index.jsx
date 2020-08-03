import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
  registerUser,
  addCompanyUser,
} from '../../../../Redux/actions/companyActions';

import { MyTextInput, MySelect } from '../../../../shared/components/Forms';
import CustomDropdown from '../../../../shared/components/Dropdown';
import { SubmitButton } from '../../../../shared/components/Buttons';

import { FormFields, SubmitSection, UserBoard } from '../Styles';

const data = [
  {
    _id: 'Adm',
    name: 'Admin',
  },
  {
    _id: 'Hr',
    name: 'Human Resources',
  },
  {
    _id: 'Pm',
    name: 'Project Manager',
  },
  {
    _id: 'Tl',
    name: 'Team leader',
  },
  {
    _id: 'Res',
    name: 'Resource',
  },
];

const AddUser = () => {
  const dispatch = useDispatch();
  return (
    <UserBoard>
      <Formik
        initialValues={{
          email: '',
          firstname: '',
          lastname: '',
          password: '',
          usertype: '',
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastname: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .max(12, 'Must be 12 characters or less')
            .min(4, 'Must be at least four characters'),
        })}
        onSubmit={(values, { resetForm }) => {
          // dispatch(registerUser(values));
          dispatch(addCompanyUser(values));
          resetForm({});
        }}
      >
        <Form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: '50%', margin: '10px 10px 10px 0' }}>
                <MyTextInput name='firstname' placeholder='User first name' />
              </div>
              <div style={{ width: '50%', margin: '10px 0 10px 10px' }}>
                <MyTextInput name='lastname' placeholder='User last name' />
              </div>
            </div>
            <div
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: '50%', margin: '10px 10px 10px 0' }}>
                <MyTextInput
                  name='email'
                  type='email'
                  placeholder='User email'
                />
              </div>
              <div style={{ width: '50%', margin: '10px 0 10px 10px' }}>
                <MyTextInput
                  name='password'
                  type='password'
                  placeholder='User password'
                />
              </div>
            </div>
            <div style={{ width: '50%', margin: '10px' }}>
              <CustomDropdown
                name='usertype'
                options={data}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option._id}
              />
            </div>
            <div style={{ margin: '10px 20px 20px' }}>
              <SubmitButton text={'Add user'} />
            </div>
          </div>
        </Form>
      </Formik>
    </UserBoard>
  );
};

export default AddUser;
