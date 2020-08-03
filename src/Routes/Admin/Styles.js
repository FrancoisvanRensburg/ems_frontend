import styled from 'styled-components';

import { color, radius, shadow } from '../../shared/utils/Styles';

export const AdminPage = styled.div`
  position: absolute;
  top: 30px;
  left: 70px;
  width: 95%;
`;

export const Container = styled.div`
  background-color: ${color.backgroundMedium};
  height: auto;
  min-height: 600px;
  min-width: 1330px;
  padding: 20px;
  border-radius: ${radius.containerRadius};
  box-shadow: ${shadow.container};
`;
