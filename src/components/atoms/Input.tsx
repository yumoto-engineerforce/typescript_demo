import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className }) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} className={className} />;
}

export default Input;
