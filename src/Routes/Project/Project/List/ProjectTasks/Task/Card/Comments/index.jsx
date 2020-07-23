import React, { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTaskComments } from '../../../../../../../../Redux/actions/projectActions';

import CommentForm from './Form';
import CommentItem from './Thread';

import {
  CommentSection,
  AddCommentBtn,
  CancelCommentBtn,
  CommentThreadContainer,
} from './Styles';

const TaskCommentBox = () => {
  const dispatch = useDispatch();
  const task = useSelector((store) => store.project.task);
  useEffect(() => {
    dispatch(getTaskComments(task._id));
  }, [dispatch]);
  const comments = useSelector((store) => store.project.taskComments);
  return (
    <Fragment>
      {task === null ? (
        <div></div>
      ) : (
        <CommentSection>
          <CommentForm task={task} />
          <CommentThreadContainer>
            {task === null || comments.length === 0 ? (
              <div></div>
            ) : (
              comments.map((comment) => (
                <CommentItem key={comment._id} comment={comment} />
              ))
            )}
          </CommentThreadContainer>
        </CommentSection>
      )}
    </Fragment>
  );
};

export default TaskCommentBox;
