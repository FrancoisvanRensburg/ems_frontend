import React from 'react';
import Moment from 'react-moment';

import {
  CommentDate,
  CommentItemHeader,
  CommentItemStyles,
  CommenterName,
} from '../Styles';

const CommentItem = ({ comment }) => {
  return (
    <CommentItemStyles>
      <CommentItemHeader>
        <CommenterName>{comment.author.name}</CommenterName>
        <CommentDate>
          <em>
            <Moment format='Do MMM, HH:mm'>{comment.date}</Moment>
          </em>
        </CommentDate>
      </CommentItemHeader>
      <div>
        <p>{comment.message}</p>
      </div>
    </CommentItemStyles>
  );
};

export default CommentItem;
