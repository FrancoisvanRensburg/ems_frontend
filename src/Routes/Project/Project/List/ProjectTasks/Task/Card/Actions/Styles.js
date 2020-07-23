import styled from 'styled-components';

import { color, radius } from '../../../../../../../../shared/utils/Styles';

export const PrimaryTabs = styled.div`
  height: 29px;
  margin-top: 15px;
  display: flex;
`;

export const NavTab = styled.button`
  border-top-left-radius: ${radius.buttonRadius};
  border-top-right-radius: ${radius.buttonRadius};
  background-color: ${color.tabBackgroundLight};
  margin: 7px 5px;
  height: 40px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
