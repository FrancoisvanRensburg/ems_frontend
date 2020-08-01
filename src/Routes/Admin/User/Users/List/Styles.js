import styled from 'styled-components';

import { color, radius } from '../../../../../shared/utils/Styles';

export const UserBoard = styled.div`
  width: 100%;
  height: 100%;
`;

export const FormFields = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 4%;
`;

export const UsersContainer = styled.div`
  width: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  display: block;
  padding: 15px 0;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 20px;
`;

export const Table = styled.table`
  width: 97.5%;
  table-layout: fixed;
  white-space: nowrap;
  margin: 10px;
  border-collapse: collapse;
`;

export const THead = styled.th`
  width: 22.5%;
  margin: 10px 0;
  border-bottom: 10px solid ${color.backgroundDark};
  text-align: left;
  text-indent: 10px;
`;

export const Tcell = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 10px;
  margin: 10px 0;
  border-bottom: 10px solid ${color.backgroundDark};
  padding: 10px 0;
  background-color: ${color.backgroundLightPrimary};
`;
