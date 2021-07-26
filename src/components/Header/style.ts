import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
`;

export const WrapLeft = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin: 0.5rem;
  }
`;

export const Wrap = styled.div``;

export const WrapRigt = styled.div`
  display: flex;
`;

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 2.5rem;
  background: #329bff;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  color: #ffffff;
  text-decoration: none;
  transition: filter 0.2s;
  font-weight: bold;
  margin: 0.2rem;

  &&:hover {
    filter: brightness(0.9);
  }
`;
