import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from 'styled-components';

interface FormFieldProps {
  label: string;
  inputType: string;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFieldContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
  flex: 2;
`;

const FormField: React.FC<FormFieldProps> = ({ label, inputType, inputValue, onInputChange }) => {
  return (
    <FormFieldContainer>
      <Box component="label" flex={1} marginRight={1} textAlign="left" fontSize="16px" fontWeight="bold">
        {label}
      </Box>
      <StyledTextField
        label={label}
        type={inputType}
        value={inputValue}
        onChange={onInputChange}
        fullWidth
        variant="outlined"
      />
    </FormFieldContainer>
  );
}

export default FormField;
