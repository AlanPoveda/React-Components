import styled from "styled-components";
import Image from "next/image";
import FourthImage from "../../../assets/fourth-image.svg";

export default function FourthContent() {
  return (
    <Content>
      <div>
        <Image src={FourthImage} alt="Third Image" width={500} height={500} />
      </div>
      <TextContent>
        <h1>Compartilhe</h1>
        <Text>
          Compartilhe o código com seu time, faça seu tempo valer a pena{" "}
        </Text>
        <Text>
          Agilize o tempo de desenvolvimento e tenha resultados rápidos
        </Text>
      </TextContent>
    </Content>
  );
}

const Content = styled.div`
  margin: 0px 150px 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;


`;

const TextContent = styled.div`
   margin: 10%;  

`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  max-width: 58%;
`;
