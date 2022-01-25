import styled from "styled-components";
import Image from "next/image";
import ThirdImage from "../../../assets/third-image.svg";

export default function ThirdContent() {
  return (
    <Content>
      <div>
        <Image src={ThirdImage} alt="Third Image" width={500} height={500} />
      </div>
      <TextContent>
        <h1>Agilidade</h1>
        <Text>
          Feitos usando as ultimas tecnologias. React e styled-components, para ser apenas um único código{" "}
        </Text>
        <Text>
          Todo o código e estilos em um lugar só
        </Text>
      </TextContent>
    </Content>
  );
}

const Content = styled.div`
  margin: 0px 150px 100px;
  display: flexbox;
  
`;


const TextContent = styled.div`
    margin: 10%;  
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  max-width: 58%;

`;
