import styled from "styled-components";
import Link from "next/link"



export function Header() {
  
  return (
    <HeaderDiv>
      <MenuLinksHeader>
        <Link href="/"><a>Home</a></Link>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </MenuLinksHeader>
      <Title>React Components</Title>
      <Link href='/knowledge/bem-vindo'><a><ButtonHeader>Documents</ButtonHeader></a></Link>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 1rem;

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
  background: ${({ theme })=>theme.colors.buttonColor};
  color: ${({ theme }) => theme.colors.primary};
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 2px;
  transition: 1s;

  &:hover{   
    background: ${({ theme })=> theme.colors.text};
    cursor: pointer;
  }
`;
