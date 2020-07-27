import React, { Fragment, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import {
  updateProjectContributors,
  getProjectContributors,
} from '../../../../../Redux/actions/projectActions';
import { getAllUsers } from '../../../../../Redux/actions/userActions';

import CustomDropdown from '../../../../../shared/components/Dropdown';
import { SubmitButton } from '../../../../../shared/components/Buttons';

import {
  ContributorsContainer,
  SubmitSection,
  ContributorList,
  Header,
  ListItem,
} from './Styles';

const ProjectContributors = ({ projectId }) => {
  const project = useSelector((store) => store.project.project);
  const users = useSelector((store) => store.user.users);
  const projectContributors = useSelector(
    (store) => store.project.projectContributors
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getProjectContributors(projectId));
  }, [dispatch]);

  return (
    <ContributorsContainer>
      <Header>Contributors</Header>
      <Formik
        initialValues={{
          contributors: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(updateProjectContributors(project._id, values));
          // console.log(project._id, values);
          setSubmitting(false);
          resetForm({});
        }}
      >
        <Form>
          <div>
            <CustomDropdown
              name='contributors'
              options={users}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option._id}
              isMulti
            />
          </div>
          <SubmitSection>
            <SubmitButton text={'add'} />
          </SubmitSection>
        </Form>
      </Formik>
      <ContributorList>
        {projectContributors === null || projectContributors.length === 0 ? (
          <li></li>
        ) : (
          projectContributors.map((contributor) => (
            <ListItem key={contributor._id}>{contributor.name}</ListItem>
          ))
        )}
      </ContributorList>
    </ContributorsContainer>
  );
};

export default ProjectContributors;
