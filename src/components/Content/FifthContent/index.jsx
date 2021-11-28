import styled from "styled-components";
import Link from "next/link"

export default function FifthContent() {
  return (
    <Content>
      <div>
        <h1>Feito pela comunidade</h1>
        <Text>
          Não será cobrada nenhuma taxa, nem nada. Totalmente gratuito para ajudar a comunidade React{" "}
        </Text>
        <Link href="/knowlage"><a><ButtomFinal>Documentação</ButtomFinal></a></Link>
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
`;

const ButtomFinal = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme })=>theme.colors.buttonColor};
  width: 200px;
  height: 36px;
  border: none;
  border-radius: 2px;
  margin-top: 40px;
  transition: 1s;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`;
