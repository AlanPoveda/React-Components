import styled from "styled-components";
import Image from "next/image";
import ThirdImage from "../../../assets/third-image.svg";

export default function ThirdContent() {
  return (
    <Content>
      <div>
        <Image src={ThirdImage} alt="Third Image" width={500} height={500}/>
      </div>
      <TextContent>
        <h1>Light, Fast & Powerful</h1>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{" "}
        </Text>
        <Text>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </Text>
      </TextContent>
    </Content>
  );
}

const Content = styled.div`
  margin: 0px 150px;
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
