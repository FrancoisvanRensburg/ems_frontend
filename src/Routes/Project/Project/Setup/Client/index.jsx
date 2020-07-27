import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import {
  updateProjectSetup,
  getProjectClient,
  addProjectClient,
} from '../../../../../Redux/actions/projectActions';
import { getClients } from '../../../../../Redux/actions/clientActions';

import { MyTextInput } from '../../../../../shared/components/Forms';
import CustomDropdown from '../../../../../shared/components/Dropdown';
import { SubmitButton } from '../../../../../shared/components/Buttons';

import { ClientsContainer, Header, SubmitSection } from './Styles';

const ProjectClient = ({ projectId }) => {
  // const project = useSelector((store) => store.project.project);
  const clients = useSelector((store) => store.client.clients);

  const loading = useSelector((store) => store.client.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
    dispatch(getProjectClient(projectId));
  }, [dispatch]);
  const client = useSelector((store) => store.project.client);
  return (
    <ClientsContainer>
      <Header>Clients</Header>
      <Formik
        enableReinitialize={true}
        initialValues={{
          client: client === null || !client.client ? '' : client.client,
          contactname:
            client === null || !client.contactname ? '' : client.contactname,
          contactnumber:
            client === null || !client.contactnumber
              ? ''
              : client.contactnumber,
          contactemail:
            client === null || !client.contactemail ? '' : client.contactemail,
        }}
        validationSchema={Yup.object({
          contactemail: Yup.string().email('Invalid email address'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addProjectClient(projectId, values));
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        <Form>
          <CustomDropdown
            name='client'
            options={clients}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option._id}
          />
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <span style={{ textAlign: 'center' }}>
              Client contact person details
            </span>
            <MyTextInput name='contactname' placeholder='Contact name' />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
              }}
            >
              <MyTextInput name='contactnumber' placeholder='Contact number' />
              <MyTextInput name='contactemail' placeholder='Contact email' />
            </div>
          </div>
          <SubmitSection>
            <SubmitButton text={'add'} />
          </SubmitSection>
        </Form>
      </Formik>
    </ClientsContainer>
  );
};

export default ProjectClient;
