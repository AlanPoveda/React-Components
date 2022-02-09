import styled from "styled-components";
import Image from "next/image";
import ThirdImage from "../../../assets/third-image.svg";
import FourthImage from "../../../assets/fourth-image.svg";

export default function ThirdContent() {
    /*
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
  
  
  */

    return (
        <>
            <Content>
                <Image
                    src={ThirdImage}
                    alt="Third Image"
                    width={500}
                    height={500}
                />

                <TextContent>
                    <h1>Agilidade</h1>
                    <Text>
                        Feitos usando as ultimas tecnologias. React e
                        styled-components, para ser apenas um único código{" "}
                    </Text>
                    <Text>Todo o código e estilos em um lugar só</Text>
                </TextContent>
            </Content>
            <Content>
                <Image
                    src={FourthImage}
                    alt="Fourth Image"
                    width={500}
                    height={500}
                />

                <TextContent>
                    <h1>Compartilhe</h1>
                    <Text>
                        Compartilhe o código com seu time, faça seu tempo valer
                        a pena{" "}
                    </Text>
                    <Text>
                        Agilize o tempo de desenvolvimento e tenha resultados
                        rápidos
                    </Text>
                </TextContent>
            </Content>
        </>
    );
}

const Content = styled.div` 
   display: flex;
   align-items: center;
   padding-left: 10%;
   h1 {
     padding-bottom: 1rem;
   }

`;

const TextContent = styled.div`
   padding-left:13rem;
   max-width: 45rem;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
`;

