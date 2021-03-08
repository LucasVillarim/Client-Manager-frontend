/* eslint-disable no-nested-ternary */
import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

// eslint-disable-next-line react/prop-types
const Select: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'white',
      width: 200,
    }),
    input: (styles: any) => ({
      ...styles,
      width: 200,
      height: 30,
    }),
    placeholder: (styles: any) => ({ ...styles, width: 200 }),
    container: (styles: any) => ({ ...styles, width: 200 }),
  };

  return (
    <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      styles={customStyles}
      placeholder="Selecione"
      {...rest}
    />
  );
};
export default Select;
