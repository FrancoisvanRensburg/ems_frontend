import React, { Fragment } from 'react';
import Moment from 'react-moment';

import ProgressBar from '../../../../../../shared/components/ProgressBar';

import TaskModal from './Card';

import { Tcell } from '../Styles';

const Task = ({ task, project }) => {
  return (
    <tr>
      <Tcell style={{ width: '24%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              margin: '0 10px 0 5px',
            }}
          >
            <TaskModal task={task} project={project} />
          </div>
          <span>{task.taskname}</span>
        </div>
      </Tcell>
      <Tcell style={{ width: '14%' }}>
        {(task.section === null) | !task.section ? (
          <span>no label</span>
        ) : (
          <span>{task.section.label}</span>
        )}
      </Tcell>
      <Tcell style={{ width: '14%' }}>
        {!task.actualstartdate ? (
          <span></span>
        ) : (
          <span>
            <Moment format='MMM Do'>{task.actualstartdate}</Moment>
          </span>
        )}
      </Tcell>
      <Tcell style={{ width: '14%' }}>
        {!task.actualenddate ? (
          <span></span>
        ) : (
          <span>
            <Moment format='MMM Do'>{task.actualenddate}</Moment>
          </span>
        )}
      </Tcell>
      <Tcell style={{ width: '17%' }}>
        {(task.assignee === null) | !task.assignee ? (
          <span>Not assigned</span>
        ) : (
          <span>{task.assignee.firstname}</span>
        )}
      </Tcell>
      <Tcell style={{ width: '17%' }}>
        <div style={{ width: '80%', height: '20px' }}>
          <ProgressBar percentage={task.progress} />
        </div>
      </Tcell>
    </tr>
  );
};

export default Task;
