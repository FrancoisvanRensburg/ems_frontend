import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  color,
  sizes,
  radius,
  zIndexValues,
  font,
} from '../../../shared/utils/Styles';

export const NavLeft = styled.nav`
  /* Will check the position at a later stage */
  position: absolute;
  height: auto;
  z-index: ${zIndexValues.navLeft};
  top: 100px;
  width: ${sizes.appNavbarLeftExtend + 10}px;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background-color: ${color.backgroundDark};
  border-top-left-radius: ${radius.cardRadius};
  border-top-right-radius: ${radius.cardRadius};
  box-shadow: ${({ open }) =>
    !open ? 'none' : '47px 0px 79px 5px rgba(0,0,0,0.2)'};
`;

export const LinkText = styled.span`
  padding: 0 20px;
  color: ${color.navLeftLink};
  ${font.bold}

  &:hover {
    color: ${color.textHoverAmber};
  }
`;

export const LinkTo = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px 10px;

  &:hover {
    background-color: #1f1e1e;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.55),
      inset -1px -2px 2px rgba(0, 0, 0, 0.3),
      inset 0px 1px 2px rgba(255, 255, 255, 0.5);
    color: ${color.textHoverAmber};
  }
`;

export const Divide = styled.div`
  height: 50px;
  width: 100%;
  background-color: transparent;
`;

export const New = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;

  &:hover {
    cursor: pointer;
    background-color: #1f1e1e;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.55),
      inset -1px -2px 2px rgba(0, 0, 0, 0.3),
      inset 0px 1px 2px rgba(255, 255, 255, 0.5);
  }
`;

export const ModalBox = styled.div`
  padding: 0 20px;
  color: ${color.navLeftLink};
  ${font.bold}

  &:hover {
    cursor: pointer;
    color: ${color.textHoverAmber};
  }
`;
