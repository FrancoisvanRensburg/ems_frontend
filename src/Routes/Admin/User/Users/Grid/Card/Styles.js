import styled from 'styled-components';

import { color, font, radius } from '../../../../../../shared/utils/Styles';

export const Card = styled.div`
  height: 100px;
  min-width: 250px;
  width: 15%;
  background-color: ${color.backgroundLightPrimary};
  border-radius: ${radius.taskRadius};
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: ${color.tabBackgroundLight};
  }
`;

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px;
  display: flex;
  gap: 20px;
  align-items: center;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  height: 59px;
  width: 59px;
  border-radius: 50%;
  color: ${color.textHeading};
  background-color: ${(props) => {
    const usertype = props.usertype;
    if (usertype === 'Pm') {
      return color.logoPrimaryGreen;
    } else if (usertype === 'Adm') {
      return color.logoPrimaryPink;
    } else if (usertype === 'Hr') {
      return color.logoPrimaryPink;
    } else if (usertype === 'Tl') {
      return color.logoPrimaryPurple;
    } else {
      return color.logoPrimaryAmber;
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  ${font.size(28)}
  ${font.regular}
`;

export const Username = styled.span`
  display: block;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${font.bold}
  ${font.size(18)}
`;

export const Email = styled.span`
  color: ${color.textDim};
  ${font.size(14)}
`;

export const BottomLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${(props) => {
    const usertype = props.usertype;
    if (usertype === 'Pm') {
      return color.logoPrimaryGreen;
    } else if (usertype === 'Adm') {
      return color.logoPrimaryPink;
    } else if (usertype === 'Hr') {
      return color.logoPrimaryPink;
    } else if (usertype === 'Tl') {
      return color.logoPrimaryPurple;
    } else {
      return color.logoPrimaryAmber;
    }
  }};
`;
