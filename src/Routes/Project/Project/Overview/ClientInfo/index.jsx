import React from 'react';

import { getProjectClient } from '../../../../../Redux/actions/projectActions';

import {
  ClientWrapper,
  ComponentHeader,
  SubHeader,
  Table,
  THead,
  Tcell,
} from './Styles';

const ClientInfo = ({ project }) => {
  return (
    <ClientWrapper>
      {!project.client ? (
        <ComponentHeader>Client information - no client added</ComponentHeader>
      ) : (
        <React.Fragment>
          <ComponentHeader>
            Client information - {project.client.name}
          </ComponentHeader>
          <Table>
            <thead>
              <tr>
                <THead>Person of contact</THead>
                <THead>Contact details</THead>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Tcell>Name:</Tcell>
                <Tcell>{project.contactname}</Tcell>
              </tr>
              <tr>
                <Tcell>Contact number:</Tcell>
                <Tcell>{project.contactnumber}</Tcell>
              </tr>
              <tr>
                <Tcell>Contact email:</Tcell>
                <Tcell>{project.contactemail}</Tcell>
              </tr>
            </tbody>
          </Table>

          <div
            style={{
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            <h3>Description</h3>
            {project.client.description ? (
              <span>{project.client.description}</span>
            ) : (
              <span>No client description provided</span>
            )}
          </div>
        </React.Fragment>
      )}
    </ClientWrapper>
  );
};

export default ClientInfo;
