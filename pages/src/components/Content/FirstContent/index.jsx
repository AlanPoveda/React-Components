import styled from "styled-components";

export default function FirstContent() {
  return (
    <FirstInformation>
      <h1>Utilize react components in your website</h1>
      <h1>Easy to use and implement</h1>
      <Text>Use the best form to duplicate components in tour website.
      Only widget components to reuse</Text>
      <ButtomStarted>Get Started</ButtomStarted>
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
