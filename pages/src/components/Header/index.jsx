import styled, { ThemeConsumer } from "styled-components";

export default function Header() {
  return (
    <HeaderDiv>
      <MenuLinksHeader>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </MenuLinksHeader>
      <Title>React-Components</Title>
      <ButtonHeader>Docks</ButtonHeader>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const MenuLinksHeader = styled.div`
  a {
    padding: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondText};
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

const ButtonHeader = styled.button`
  background: #111b47;
  color: ${({ theme }) => theme.colors.primary};
  width: 160px;
  height: 26px;
  border: none;
  border-radius: 2px;
`;
