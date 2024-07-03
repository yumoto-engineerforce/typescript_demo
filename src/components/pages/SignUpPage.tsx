import React from 'react';
import SignUpForm from '../organisms/SignUpForm';
import styled from 'styled-components';

const SignUpPageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SignUpPage: React.FC = () => {
  return (
    <SignUpPageContainer>
      <SignUpForm />
    </SignUpPageContainer>
  );
}

export default SignUpPage;
