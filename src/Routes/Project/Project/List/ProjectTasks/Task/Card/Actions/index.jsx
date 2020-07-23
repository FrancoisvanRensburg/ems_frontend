import React from 'react';

import { PrimaryTabs, NavTab } from './Styles';

export const PrimaryActions = ({ task }) => {
  return (
    <PrimaryTabs>
      {task.tasknumber ? (
        <NavTab>{task.tasknumber}</NavTab>
      ) : (
        <NavTab>Task</NavTab>
      )}
      <NavTab>Docs</NavTab>
      <NavTab>Checklist</NavTab>
    </PrimaryTabs>
  );
};

export const SecondaryActions = () => {
  return (
    <PrimaryTabs>
      <NavTab>Comments</NavTab>
      <NavTab>History</NavTab>
    </PrimaryTabs>
  );
};
