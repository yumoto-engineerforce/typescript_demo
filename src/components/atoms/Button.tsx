import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  to?: string; // オプションのtoプロパティを追加
}

const StyledButton = styled.button`
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: #3700b3;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, to }) => {
  if (to) {
    return (
      <StyledButton as={Link} to={to}>
        {label}
      </StyledButton>
    );
  }
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}

export default Button;
