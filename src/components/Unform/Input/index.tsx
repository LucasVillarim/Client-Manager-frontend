import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
}
// eslint-disable-next-line react/prop-types
const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default Input;
