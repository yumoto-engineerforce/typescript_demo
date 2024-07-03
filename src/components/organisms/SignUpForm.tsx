import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../state/userSlice';
import FormField from '../molecules/FormField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const FormContainer = styled(Box)`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(signUp({ email, password }));
  };

  return (
    <FormContainer
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp();
      }}
    >
      <h2>Sign Up</h2>
      <FormField
        label="Email"
        inputType="email"
        inputValue={email}
        onInputChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        label="Password"
        inputType="password"
        inputValue={password}
        onInputChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Sign Up
      </Button>
    </FormContainer>
  );
};

export default SignUpForm;
