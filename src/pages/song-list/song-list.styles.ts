import styled from 'styled-components';
import mediaQuery from '../../shared/styles/mediaQuery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
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
  width: 90%;
`;

const Button = styled.button`
  background-color: #8d56fd;
  border: 0;
  border-radius: 10px;
  padding: 4px 10px;
`;

const LyricsButton = styled(Button)`
  font-size: 14px;
`;

const NextAndPrevButton = styled(Button)`
  padding: 12px 16px;
`;

const Center = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: fit-content;
  transform: translate(-50%, -50%);
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
};

// TODO mobile styles
