import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const HomePageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <h1>Home Page</h1>
      <Button label="Sign Up" to="/signup" />
    </HomePageContainer>
  );
}

export default HomePage;
