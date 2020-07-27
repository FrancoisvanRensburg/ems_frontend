import styled from 'styled-components';

import { color, font } from '../../../../shared/utils/Styles';

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0 0 0;
`;

export const AddDescription = styled.button`
  color: ${color.textParagraph};
  text-decoration: underline;
  margin: 10px 12.5% 15px;
  &:hover {
    cursor: pointer;
    color: ${color.textSubHeading};
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  transition: bounce 0.5s ease-in;
  margin-bottom: 35px;
`;

export const LinkText = styled.span`
  padding: 0 20px;
  color: ${color.navLeftLink};
  ${font.bold}

  &:hover {
    color: ${color.textHoverAmber};
  }
`;

export const New = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;

  &:hover {
    background-color: #1f1e1e;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.55),
      inset -1px -2px 2px rgba(0, 0, 0, 0.3),
      inset 0px 1px 2px rgba(255, 255, 255, 0.5);
  }
`;
