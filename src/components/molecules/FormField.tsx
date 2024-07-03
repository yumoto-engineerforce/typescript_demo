import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  inputType: string;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  flex: 1;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;  // ラベルを左寄せにする
`;

const StyledInput = styled(Input)`
  flex: 2;
`;

const FormField: React.FC<FormFieldProps> = ({ label, inputType, inputValue, onInputChange }) => {
  return (
    <FormFieldContainer>
      <Label>{label}</Label>
      <StyledInput type={inputType} placeholder={label} value={inputValue} onChange={onInputChange} />
    </FormFieldContainer>
  );
}

export default FormField;
