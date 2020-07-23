import styled from 'styled-components';

import {
  color,
  font,
  radius,
} from '../../../../../../../../shared/utils/Styles';

export const CommentSection = styled.div`
  margin-top: 10px;
`;

export const CommentFormSection = styled.div`
  width: 100%;
`;

export const CommentThreadContainer = styled.div`
  width: 100%;
  background-color: ${color.backgroundMedium};
  border-radius: ${radius.cardRadius};
  padding: 7px 5px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const CommentItemStyles = styled.div`
  border: 0.5px solid ${color.buttonPink};
  margin: 0 20px 12px 5px;
  border-radius: ${radius.containerRadius};
  padding: 7px 5px;
`;

export const CommentItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8.5px;
`;

export const CommenterName = styled.span`
  ${font.bold}
  ${color.textTitle}
`;
export const CommentDate = styled.span`
  ${font.medium}
  ${color.textSubHeading}
`;

export const AddCommentBtn = styled.button`
  display: flex;
  background-color: blue;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 120px;
`;

export const CancelCommentBtn = styled.button`
  display: flex;
  background-color: red;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 120px;
`;
