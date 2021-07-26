import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: .2rem;
  border: none;
  font-size: 1rem;
  margin: .5rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 25rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  margin: 2rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 3rem;
  border-radius: .2rem;
  border: none;
  font-size: 1rem;
  margin: .5rem;
  background: #329bff;
  color: #ffffff;
  transition: filter 0.2s;
  font-size: 1.3rem;

  &&:hover {
    filter: brightness(0.9);
  }

`;

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 3rem;
  border-radius: .2rem;
  border: none;
  font-size: 1rem;
  margin: .5rem;
  background: #329bff;
  color: #ffffff;
  transition: filter 0.2s;
  font-size: 1.5rem;
  text-decoration: none;

  &&:hover {
    filter: brightness(0.9);
  }
`;

