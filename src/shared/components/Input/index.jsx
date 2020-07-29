import React from 'react';
import { useFormikContext, useField } from 'formik';

import { StyledErrorMessage, StyledInput, StyledLabel } from './Styles';

const InputField = ({ label, ...props }) => {
  const { setFieldTouched, handleChange, submitForm } = useFormikContext();
  const [field, meta] = useField(props);

  function updateBlur() {
    setFieldTouched(props.name, true);
    submitForm();
  }
  return (
    <>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <StyledInput
        {...field}
        {...props}
        onBlur={updateBlur}
        onChange={handleChange}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

export default InputField;
