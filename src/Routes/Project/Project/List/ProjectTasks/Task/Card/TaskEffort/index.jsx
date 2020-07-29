import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import {
  updateTaskName,
  updateTask,
} from '../../../../../../../../Redux/actions/projectActions';

import InputField from '../../../../../../../../shared/components/Input';

const TaskEffort = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        effort: task === null || !task.effort ? '' : task.effort,
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(updateTask(task._id, values));
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form>
        <InputField name='effort' type='number' placeholder='Task effort...' />
      </Form>
    </Formik>
  );
};

export default TaskEffort;
