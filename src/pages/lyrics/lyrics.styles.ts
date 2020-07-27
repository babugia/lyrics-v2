import styled from 'styled-components';
import { Center } from '../../shared/styles/shared.styles';

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

const LyricsRow = styled.p`
  text-align: center;
`;

export const Styled = {
  Container,
  Center,
  LyricsRow,
  ErrorLabel,
};
