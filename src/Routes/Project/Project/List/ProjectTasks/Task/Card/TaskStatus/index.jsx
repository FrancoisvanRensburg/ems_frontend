import React from 'react';

import ProgressBar from '../../../../../../../../shared/components/ProgressBar';

const TaskStatus = ({ task }) => {
  return (
    <div style={{ width: '100%', height: '38px' }}>
      {task === null || !task.progress ? (
        <ProgressBar percentage={0} />
      ) : (
        <ProgressBar percentage={task.progress} />
      )}
    </div>
  );
};

export default TaskStatus;
