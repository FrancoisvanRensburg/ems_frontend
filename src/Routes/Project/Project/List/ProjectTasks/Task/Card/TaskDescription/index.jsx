import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { updateTask } from '../../../../../../../../Redux/actions/projectActions';

import TextareaField from '../../../../../../../../shared/components/Textarea';

const TaskDescription = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        description: task === null || !task.description ? '' : task.description,
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(updateTask(task._id, values));
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form>
        <div style={{ height: '150px', width: '70%', boxSizing: 'border-box' }}>
          <TextareaField
            name='description'
            placeholder='Add a description...'
          />
        </div>
      </Form>
    </Formik>
  );
};

export default TaskDescription;
