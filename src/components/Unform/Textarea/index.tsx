import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface InputProps extends React.HTMLProps<HTMLTextAreaElement> {
  name: string;
}

// eslint-disable-next-line react/prop-types
const Textarea: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default Textarea;
