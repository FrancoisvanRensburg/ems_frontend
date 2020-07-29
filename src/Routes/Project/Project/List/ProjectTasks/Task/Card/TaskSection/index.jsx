import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import { addTaskInSection } from '../../../../../../../../Redux/actions/projectActions';

import CustomDropdown from '../../../../../../../../shared/components/DropdoenTwo';

const TaskSection = ({ task }) => {
  const dispatch = useDispatch();
  const sections = useSelector((store) => store.project.sections);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        section: task === null || !task.section ? '' : task.section,
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(addTaskInSection(task._id, values));
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form>
        <CustomDropdown
          name='section'
          options={sections}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option._id}
        />
      </Form>
    </Formik>
  );
};

export default TaskSection;
