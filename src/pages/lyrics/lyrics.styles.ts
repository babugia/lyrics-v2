import styled from 'styled-components';
import { Center } from '../../shared/styles/shared.styles';
import mediaQuery from '../../shared/styles/mediaQuery';

const Container = styled.div`
  padding: 1rem;
  overflow-y: scroll;
  height: 100%;
  color: black;
`;

const ErrorLabel = styled.span`
  text-align: center;
  margin-top: 1rem;
  display: block;
  font-size: 18px;
`;

export const Styled = {
  Container,
  Center,
  ErrorLabel,
};
