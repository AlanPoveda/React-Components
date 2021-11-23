import styled, { ThemeConsumer } from "styled-components";
import Link from "next/link"


export default function Header() {
  return (
    <HeaderDiv>
      <MenuLinksHeader>
        <Link href="/"><a>Home</a></Link>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </MenuLinksHeader>
      <Title>React-Components</Title>
      <ButtonHeader>Documents</ButtonHeader>
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
  transition: 1s;

  &:hover{   
    background: ${({ theme })=> theme.colors.text};
    cursor: pointer;
  }
`;
