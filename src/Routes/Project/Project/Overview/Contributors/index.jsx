import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProjectContributors } from '../../../../../Redux/actions/projectActions';

// Temporary fix for unique key warning on contributor list. Included code from ContributorItem in this file
// import ContributorItem from './Item';

import { ReactComponent as DM } from '../../../../../App/assets/images/chat-icon.svg';

import {
  HeadItem,
  ContributorsContainer,
  ComponentHeader,
  ContributorList,
  Item,
  Contributor,
} from './Styles';

const ProjectContributors = ({ project }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectContributors(project._id));
  }, [dispatch]);
  const contributors = useSelector(
    (store) => store.project.projectContributors
  );
  return (
    <Fragment>
      <ContributorsContainer>
        <ComponentHeader>Contributors</ComponentHeader>
        <ContributorList>
          <li>
            <HeadItem>
              <span>Name</span>
              <span>Association</span>
              <span></span>
            </HeadItem>
          </li>
          {contributors.length > 0 ? (
            contributors.map((contributor) => (
              <li key={contributor._id}>
                <Item>
                  <Contributor>
                    <span>
                      {contributor.firstname} {contributor.lastname}
                    </span>
                    {contributor.association ? (
                      <span>{contributor.association}</span>
                    ) : (
                      <span>Role not defined</span>
                    )}
                  </Contributor>

                  <span>
                    <DM />
                  </span>
                </Item>
              </li>
            ))
          ) : (
            <li>
              <span>No contributors added</span>
            </li>
          )}
        </ContributorList>
      </ContributorsContainer>
    </Fragment>
  );
};

export default ProjectContributors;
