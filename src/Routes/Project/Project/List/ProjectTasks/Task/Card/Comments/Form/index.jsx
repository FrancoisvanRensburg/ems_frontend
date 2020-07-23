import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { addTaskCommentProject } from '../../../../../../../../../Redux/actions/projectActions';

import { MyTextarea } from '../../../../../../../../../shared/components/Forms';

import {
  CommentButton,
  CancelButton,
} from '../../../../../../../../../shared/components/Buttons';

const CommentForm = ({ task }) => {
  const dispatch = useDispatch();
  const [displayCommentForm, setCommentForm] = useState(false);

  return (
    <div>
      {!displayCommentForm && (
        <div
          onClick={() => setCommentForm(!displayCommentForm)}
          style={{ width: '100%', border: '1px solid red' }}
        >
          <span>Add a comment</span>
        </div>
      )}
      {displayCommentForm && (
        <Formik
          initialValues={{
            messages: '',
          }}
          validationSchema={Yup.object({
            message: Yup.string()
              .min(10, 'Comment must be 10 characters or less')
              .max(
                240,
                'Comment must be 240 characters or less. Upload a descriptive document if required'
              ),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(addTaskCommentProject(task._id, values));
            setSubmitting(false);
            resetForm({});
          }}
        >
          <Form>
            <div
              style={{ width: '100%', height: '120px', marginBottom: '15px' }}
            >
              <MyTextarea name='message' placeholder='Add comment...' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setCommentForm(!displayCommentForm)}>
                cancel
              </button>
              {/* <CancelButton
                onClick={() => setCommentForm(!displayCommentForm)}
              /> */}
              <CommentButton />
            </div>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default CommentForm;
