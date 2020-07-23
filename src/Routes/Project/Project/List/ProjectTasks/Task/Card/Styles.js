import styled from 'styled-components';

import { DatePickerField } from '../../../../../../../shared/components/DatePicker';

import { color } from '../../../../../../../shared/utils/Styles';

export const DatePicker = styled(DatePickerField)`
  background-color: ${color.backgroundLightPrimary};
  border: none;
  border-radius: 3px;
  /* width: 100%; */
  height: 36px;
  color: ${color.textParagraph};

  &::placeholder {
    color: ${color.textParagraph};
  }
`;
