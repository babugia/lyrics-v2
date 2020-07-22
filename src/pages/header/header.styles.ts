import styled from 'styled-components';
import mediaQuery from '../../shared/styles/mediaQuery';

const Container = styled.div`
  position: relative;
  margin-top: 1rem;
  width: 50vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  ${mediaQuery.phone} {
    width: 90vw;
  }
`;

const Input = styled.input`
  border: 0;
  border-radius: 50px;
  font-size: 16px;
  padding: 15px 30px;
  width: 100%;
`;

const SearchIcon = styled.div`
  display: none;
  position: absolute;
  color: black;
  padding: 15px;
  top: 0;
  right: 0;
  font-size: 1.3rem;

  ${mediaQuery.phone} {
    display: initial;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: #8d56fd;
  border: 0;
  border-radius: 50px;
  font-size: 16px;
  padding: 13px 30px;

  ${mediaQuery.phone} {
    display: none;
  }
`;

export const Styled = {
  Button,
  Container,
  SearchIcon,
  Input,
};
