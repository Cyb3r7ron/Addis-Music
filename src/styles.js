import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { space, color, typography } from 'styled-system';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 2px solid #ccc;
  padding: 24px;
  flex-direction: column; /* Set flex-direction to column */
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
  ${typography};
`;

export const Form = styled.form`
  width: 300px;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  ${typography};
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  ${space};
  ${color};
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #ffffff;
  cursor: pointer;
  ${space};
  ${color};

  display: block;
  margin: 0 auto;
`;
