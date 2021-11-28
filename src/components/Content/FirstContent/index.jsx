import styled from "styled-components";
import Link from "next/link"

export default function FirstContent() {
  return (
    <FirstInformation>
      <h1>Copie e cole vários Widgest para usar no seu projeto</h1>
      <h1>Fácil de usar, fácil de implementar</h1>
      <Text>Widgtes são pedaços de códigos, que podem ser reutilizados nos teus projetos. Acesse e veja</Text>
      <Link href="/knowlage"><a><ButtomStarted>Vamos começar</ButtomStarted></a></Link>
      
    </FirstInformation>
  );
}

const FirstInformation = styled.div`
  margin: 200px 150px;
  h1 {
    color: #091133;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  max-width: 50%;
`;

const ButtomStarted = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme })=>theme.colors.buttonColor};
  width: 200px;
  height: 36px;
  border: none;
  border-radius: 2px;
  margin-top: 20px;
  transition: 1s;
  

  &:hover{
    background: ${({ theme })=> theme.colors.text};
    cursor: pointer;
  }
`;
