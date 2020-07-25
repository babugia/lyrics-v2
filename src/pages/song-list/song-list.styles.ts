import styled from 'styled-components';
import Popup from 'reactjs-popup';
import mediaQuery from '../../shared/styles/mediaQuery';
import { Center } from '../../shared/styles/shared.styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const Modal = styled(Popup)`
  &-content {
    height: 80%;
    width: 40%;
    max-width: 23rem;
    ${mediaQuery.phone} {
      width: 70% !important;
    }
  }
`;

const List = styled.ul`
  width: 60%;
  margin-top: 1rem;
  border: 1px solid #fff;
  border-radius: 5px;

  ${mediaQuery.phone} {
    width: 90%;
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  padding: 0.5rem;
  border-bottom: 0.1px solid grey;
  justify-content: space-between;
`;

const Label = styled.span`
  align-self: center;
`;

const ButtonsContainer = styled.div<{ prev: boolean }>`
  margin-top: 1rem;
  display: flex;
  flex-direction: ${(props) => (props.prev ? 'row' : 'row-reverse')};
  justify-content: space-between;
  width: 60%;
  ${mediaQuery.phone} {
    width: 90%;
  }
`;

const Button = styled.button`
  background-color: #8d56fd;
  border: 0;
  border-radius: 10px;
  padding: 4px 10px;
`;

const LyricsButton = styled(Button)`
  font-size: 14px;
  max-height: 24px;
  align-self: center;
`;

const NextAndPrevButton = styled(Button)`
  padding: 12px 16px;
`;

const NotFoundLabel = styled(Center)`
  font-size: 24px;
`;

export const Styled = {
  Container,
  List,
  ListItem,
  Label,
  ButtonsContainer,
  NextAndPrevButton,
  LyricsButton,
  NotFoundLabel,
  Center,
  Modal,
};
