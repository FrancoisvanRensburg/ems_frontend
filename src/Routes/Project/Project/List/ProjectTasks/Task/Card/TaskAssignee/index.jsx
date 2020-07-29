import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { updateTask } from '../../../../../../../../Redux/actions/projectActions';

import CustomDropdown from '../../../../../../../../shared/components/DropdoenTwo';

const TaskAssignee = ({ task, project }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        assignee: task === null || !task.assignee ? '' : task.assignee,
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(updateTask(task._id, values));
        // alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form>
        <CustomDropdown
          name='assignee'
          options={project.contributors}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option._id}
          hideSelectedOptions={true}
          // isMulti={true}
          isSearchable={true}
        />
      </Form>
    </Formik>
  );
};

export default TaskAssignee;
