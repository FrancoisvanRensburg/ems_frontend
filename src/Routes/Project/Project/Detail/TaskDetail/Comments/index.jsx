import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTaskComments } from '../../../../../../Redux/actions/projectActions';

import CommentForm from './Form';
import CommentItem from './Thread';

import {
  CommentSection,
  CommentFormSection,
  CommentThreadContainer,
} from './Styles';

const TaskCommentBox = () => {
  const dispatch = useDispatch();
  const task = useSelector((store) => store.project.task);
  useEffect(() => {
    dispatch(getTaskComments(task._id));
  }, [dispatch]);
  const comments = useSelector((store) => store.project.taskComments);
  console.log(task);
  return (
    <CommentSection>
      <CommentFormSection style={{ width: '50%' }}>
        <CommentForm task={task} />
      </CommentFormSection>
      <CommentThreadContainer style={{ width: '50%' }}>
        {task === null ? (
          <div> </div>
        ) : (
          comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
          ))
        )}
      </CommentThreadContainer>
    </CommentSection>
  );
};

export default TaskCommentBox;
