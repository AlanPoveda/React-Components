import styled from "styled-components";
import Link from "next/link"

import PrimaryButton from "../../PrimaryButton";

export default function FirstContent() {
  return (
    <FirstInformation>
      <h1>Copie e cole vários Widgets para usar no seu projeto</h1>
      <h1>Fácil de usar, fácil de implementar</h1>
      <Text>Widgets são pedaços de códigos, que podem ser reutilizados nos teus projetos. Acesse e veja</Text>
      <PrimaryButton linkButton="/knowledge" buttonText="Documentação"/>
      
      
    </FirstInformation>
  );
}

const FirstInformation = styled.div`
  margin: 200px 150px;
  h1 {
    color: #091133;
    padding-bottom: 0.5rem;
  }
`;

const Text = styled.p`
  padding: 0.5rem 0 2rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  max-width: 50%;
`;

