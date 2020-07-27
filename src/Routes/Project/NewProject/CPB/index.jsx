import React, { useState, Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// import Modal from '../../../../shared/components/ModalTwo';
import Modal from '../../../../shared/components/ModalThree';

import { createProject } from '../../../../Redux/actions/projectActions';

import { MyTextInput, MyTextarea } from '../../../../shared/components/Forms';
import { SubmitButton } from '../../../../shared/components/Buttons';

import { ReactComponent as NewIcon } from '../../../../App/assets/images/new.svg';

import {
  AddDescription,
  SubmitSection,
  DescriptionWrapper,
  New,
  LinkText,
} from './Styles';

const CreatProject = ({ history }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  const project = useSelector((store) => store.project.project);
  const [displayProjectDescription, toggleProjectDescription] = useState(false);

  const projectPaths = () => {
    history.push(`/project/${project._id}/setup`);
  };

  return (
    <div>
      <New
        onClick={() => {
          setToggleModal(!toggleModal);
        }}
      >
        <NewIcon />
        <LinkText>NEW</LinkText>
      </New>
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header>Create Project</Modal.Header>
        <Formik
          initialValues={{
            projectname: '',
            projectcode: '',
            description: '',
          }}
          validationSchema={Yup.object({
            projectname: Yup.string()
              .max(40, 'Must be 40 characters or less')
              .required('Required'),
            projectcode: Yup.string()
              .max(8, 'Must be 6 characters or less')
              .min(3, 'Must be 3 characters or more')
              .required('Required'),
            description: Yup.string().max(
              240,
              'Must be 240 characters or less'
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(createProject(values));
            setSubmitting(false);
            projectPaths();
          }}
        >
          <Form>
            <div style={{ display: 'flex', margin: '15px 0 0 0' }}>
              <div style={{ display: 'flex', width: '63%' }}>
                <label style={{ margin: '0 20px 0 0' }}>Project name:</label>
                <MyTextInput name='projectname' placeholder='Project name' />
              </div>
              <div
                style={{ display: 'flex', width: '20%', margin: '0 0 0 40px' }}
              >
                <label style={{ margin: '0 20px 0 0' }}>Project code</label>
                <MyTextInput name='projectcode' placeholder='Project code' />
              </div>
            </div>
            <div>
              <AddDescription
                type='button'
                onClick={() =>
                  toggleProjectDescription(!displayProjectDescription)
                }
              >
                Add project description
              </AddDescription>
            </div>
            {displayProjectDescription && (
              <Fragment>
                <DescriptionWrapper>
                  <label htmlFor='description' style={{ margin: '0 15px 0 0' }}>
                    Description
                  </label>
                  <div style={{ width: '84.5%', height: '150px' }}>
                    <MyTextarea
                      name='description'
                      placeholder='Project description'
                    />
                  </div>
                </DescriptionWrapper>
              </Fragment>
            )}
            <SubmitSection>
              <SubmitButton
                // onClick={[
                //   () => modalRef.current.close(),
                //   () => history.push(`/project/${project._id}/setup`),
                // ]}
                text={'create'}
              />
            </SubmitSection>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default withRouter(CreatProject);
