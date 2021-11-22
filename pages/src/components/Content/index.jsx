import styled from "styled-components";


export default function Content() {
  return (
    <InformationHome>
      <FirstInformation>
        <h1>Utilize react components in your website</h1>
        <h1>Easy to use and implement</h1>
        <Text>
          Use the best form to duplicate components in tour website. 
        </Text>
        <Text>
            Only widget
          components to reuse
        </Text>
        <ButtomStarted>Get Started</ButtomStarted>
      </FirstInformation>
    </InformationHome>
  );
}

const InformationHome = styled.div`
    position: relative;
`;

const FirstInformation = styled.div`
  margin: 200px 150px;
  h1 {
    color: #091133;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`;

const ButtomStarted = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: #111b47;
  width: 200px;
  height: 36px;
  border: none;
  border-radius: 2px;
  margin-top: 20px;
`;
