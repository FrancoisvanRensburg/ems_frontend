import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import moment from 'moment';

import { updateTask } from '../../../../../../../../Redux/actions/projectActions';

import { DatePicker } from './Styles';

const TaskStartDate = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        actualstartdate:
          task === null || !task.actualstartdate
            ? ''
            : moment(task.actualstartdate),
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(updateTask(task._id, values));
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form>
        <DatePicker
          name='actualstartdate'
          showMonthDropdown
          useShortMonthInDropdown
          placeholderText='Start date'
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

export default TaskStartDate;

{
  /* <input
            type='date'
            name='actualstartdate'
            value={values.actualstartdate}
            placeholderText='Start date'
            onBlur={handleBlur}
            onChange={handleChange}
          /> */
}
