import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import moment from 'moment';

import { updateTask } from '../../../../../../../../Redux/actions/projectActions';

import { DatePicker } from './Styles';

const TaskEndDate = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        actualenddate:
          task === null || !task.actualenddate
            ? ''
            : moment(task.actualenddate),
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(updateTask(task._id, values));
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form>
        <DatePicker
          name='actualenddate'
          showMonthDropdown
          useShortMonthInDropdown
          placeholderText='End date'
        />
        <button
          style={{
            backgroundColor: 'green',
            color: 'black',
            padding: '5px 15px',
          }}
          type='submit'
        >
          save
        </button>
      </Form>
    </Formik>
  );
};

export default TaskEndDate;
