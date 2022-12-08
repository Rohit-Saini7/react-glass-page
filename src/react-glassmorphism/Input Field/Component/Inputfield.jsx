import React from 'react';
import styled from 'styled-components';

export const Inputfield = ({
  type = 'text',
  value,
  color,
  size,
  height,
  width,
  label,
  txtColor,
  onWheel,
  placeholder,
  onChange,
}) => {
  return (
    <InputContain>
      <LabelText color={txtColor}>{label}</LabelText>
      <Input
        type={type}
        value={value}
        color={color}
        size={size}
        height={height}
        width={width}
        label={label}
        onWheel={onWheel}
        placeholder={placeholder}
        textcolor={txtColor}
        onChange={onChange}
      />
    </InputContain>
  );
};

const InputContain = styled.div`
  width: 50vh;
  min-height: 10vh;
`;
const LabelText = styled.label`
  position: relative;
  font-size: 12px;
  min-width: 100px;
  top: 5px;
  left: 10px;
  ${({ color }) => {
    return `
    color:${color};
    `;
  }}
  display: block;
`;
const Input = styled.input`
  align-items: left;
  border: 1px solid;
  border-radius: 5px;
  ::placeholder {
    color: ${(P) => P.textcolor};
  }
  ${({ color }) => {
    return `
    background-color:${color};
    border-color:${color};
    `;
  }}
  box-shadow: 0 8px 15px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  min-width: ${(p) => (p.size == 'xs' || 'sm' || 'lg' || 'xl' ? 300 : '')}px;
  height: ${(p) => (p.size == 'xs' ? 29 : '')}px;
  height: ${(p) => (p.size == 'sm' ? 30 : '')}px;
  height: ${(p) => (p.size == 'lg' ? 34 : '')}px;
  height: ${(p) => (p.size == 'xl' ? 38 : '')}px;
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  :focus {
    outline: none;
  }
  text-align: left;
  padding-left: 10px;
  margin: 5px;
`;
