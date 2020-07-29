import styled from 'styled-components';

import { font, color, zIndexValues } from '../../utils/Styles';

export const StyledErrorMessage = styled.div`
color: ${color.buttonPink};
  ${font.size(12)}
  z-index: ${zIndexValues.modal};
  position: absolute;
  padding: 3px 0 0 5px;
`;

export const StyledLabel = styled.label`
  margin: 0 7px 0 0;
  ${font.size(15)}
`;

export const StyledTextarea = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 7px;
  resize: none;
  border-radius: 3px;
  border: none;
  box-sizing: border-box;
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;
