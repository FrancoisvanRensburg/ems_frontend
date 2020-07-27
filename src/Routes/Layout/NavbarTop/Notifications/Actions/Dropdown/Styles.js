import styled from 'styled-components';

import {
  color,
  radius,
  font,
  zIndexValues,
} from '../../../../../../shared/utils/Styles';

export const DropdownContainer = styled.div`
  border: 5px solid ${color.buttonPurple};
  border-radius: ${radius.containerRadius};
`;

export const NotificationDropdown = styled.div`
  width: 300px;
  min-height: 300px;
  height: auto;
  max-height: 500px;
  overflow: scroll;
  z-index: ${zIndexValues.navLeft};
  background-color: ${color.backgroundDark};
  box-sizing: border-box;
`;
