import styled from "styled-components";

import PrimaryButton from "../../PrimaryButton";

export default function FifthContent() {
  return (
    <Content>
      <div>
        <h1>Feito pela comunidade</h1>
        <Text>
          Não será cobrada nenhuma taxa, nem nada. Totalmente gratuito para ajudar a comunidade React{" "}
        </Text>
       <PrimaryButton linkButton="/knowledge" buttonText="Documentação" />
      </div>
    </Content>
  );
}

//
const Content = styled.div`
  background: rgb(231, 236, 255, 0.5);
  height: 50rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin: 0% 20%;
  padding-bottom: 20px;
`;



