import React from 'react';
import styled from 'styled-components';

export const RadioField = ({
  value,
  color,
  size,
  height,
  width,
  label,
  txtColor,
  onChange,
  checked,
  ...others
}) => {
  return (
    <Radio>
      <RadioButton
        type='radio'
        value={!!value ? value : label}
        color={color}
        size={size}
        height={height}
        width={width}
        label={label}
        textcolor={txtColor}
        onChange={onChange}
        checked={checked}
        {...others}
      />
      <RadioLabel>{label}</RadioLabel>
    </Radio>
  );
};

const Radio = styled.div``;
const RadioButton = styled.input``;
const RadioLabel = styled.label``;
