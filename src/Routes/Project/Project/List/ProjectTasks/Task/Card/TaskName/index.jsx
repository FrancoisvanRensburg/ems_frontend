import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import {
  updateTaskName,
  updateTask,
} from '../../../../../../../../Redux/actions/projectActions';

import InputField from '../../../../../../../../shared/components/Input';

const TaskName = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        taskname: task === null || !task.taskname ? '' : task.taskname,
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(updateTask(task._id, values));
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form>
        <InputField name='taskname' type='text' placeholder='Task name...' />
      </Form>
    </Formik>
  );
};

export default TaskName;
