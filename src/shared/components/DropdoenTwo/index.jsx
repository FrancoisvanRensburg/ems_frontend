import React from 'react';
import Select from 'react-select';
import { useFormikContext, useField } from 'formik';

const CustomDropdown = ({ options, label, ...props }) => {
  const { setFieldValue, setFieldTouched, submitForm } = useFormikContext();
  const [field, meta] = useField(props);

  function handleOptionChange(selection) {
    setFieldValue(props.name, selection);
    submitForm();
  }

  function updateBlur() {
    setFieldTouched(props.name, true);
  }

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: '#292929',
      color: 'white',
      border: state.isFocused ? null : null,
      boxShadow: 'inset 0px 0px 3px rgba(238, 238, 238, 0.2)',
      borderColor: state.isFocused ? 'rgba(155, 110, 255, 1)' : 'transparent',
      transition:
        'border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease',
    }),
    singleValue: (base, state) => ({
      ...base,
      color: 'white',
    }),
    menu: (base) => ({
      ...base,
      background: '#292929',
      marginTop: '5px',

      // '&:hover': {
      //   backgroundColor: '#1B1B1B',
      //   color: 'rgb(155, 110, 255)',
      // },
    }),
    option: (base) => ({
      ...base,
      '&:hvaer': {
        backgroundColor: '#1B1B1B',
        color: 'rgb(155, 110, 255)',
      },
    }),
  };

  return (
    <>
      {label && <label htmlFor={props.id}>{label}</label>}
      <Select
        options={options}
        {...field}
        {...props}
        onBlur={updateBlur}
        onChange={handleOptionChange}
        styles={customStyles}
      />
      {meta.touched && meta.error ? <span>{meta.error.value}</span> : null}
    </>
  );
};

export default CustomDropdown;
