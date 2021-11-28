import styled from "styled-components";
import { Code } from "@styled-icons/bootstrap/Code"
import { Users } from "@styled-icons/feather/Users"

import Image from "next/image";
import SecondImage from "../../../assets/second-image.svg";

export default function SecondContent() {
  return (
    <SecondContentInformation>
      <div>
        <h1>Leve, rápido e poderoso</h1>
        <Text>
          Desenvolva de forma mais rápida e simples, uma aplicação. Apenas copie e cole os nossos Widgest e construa um site muito mais rápido
        </Text>
        <Text>
          Criados pela comunidade, para usar nos seus projetos mas variados
        </Text>

        <MoreInformation>
          <div>
            <CodeIcon />
            <h3>Fácil de usar</h3>
            <p>
              Códigos que só precisa copiar e colar{" "}
            </p>
          </div>

          <div>
            <UsersIcon />
            <h3>Reutilize</h3>
            <p>
              Feitos para ser reutilizados pelo seu time
            </p>
          </div>
        </MoreInformation>
      </div>
      <Image src={SecondImage} alt="Second image" width={1100} height={1100} />
    </SecondContentInformation>
  );
}

const SecondContentInformation = styled.div`
  margin: 400px 150px 150px;
  display: flex;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  max-width: 70%;
`;

const MoreInformation = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: row;

  p {
    max-width: 30%;
    font-size: 12px;
    color: #5d6970;
  }
`;

const CodeIcon = styled(Code)`
    width: 40px;
    height: 40px;
`;

const UsersIcon = styled(Users)`
    width: 40px;
    height: 40px;
`;
