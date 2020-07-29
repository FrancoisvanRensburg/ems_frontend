import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { updateTask } from '../../../../../../../../Redux/actions/projectActions';

import CustomDropdown from '../../../../../../../../shared/components/DropdoenTwo';

const prty = [
  { _id: 'tskprty1', value: '3', name: 'High' },
  { _id: 'tskprty2', value: '2', name: 'Medium' },
  { _id: 'tskprty3', value: '1', name: 'Low' },
];

const TaskPriority = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      //   enableReinitialize={true}
      initialValues={{
        priority: task === null || !task.priority ? '' : task.priority,
      }}
      onSubmit={(values, { setSubmitting }) => {
        // dispatch(updateTask(task._id, values));
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form>
        <CustomDropdown
          name='priority'
          options={prty}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.name}
        />
      </Form>
    </Formik>
  );
};

export default TaskPriority;
