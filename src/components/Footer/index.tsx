import styled from "styled-components";

import PrimaryButton from "../PrimaryButton";



export default function Footer() {
  return (
    <FooterConfig>
      <FirstFooterContent>
        <div>
          <p>©2020 FPED</p>
        </div>
        <div>
          <h1>React-Widgets</h1>
        </div>
        <div>
        <PrimaryButton linkButton="/knowledge" buttonText="Documentação" />
        </div>
      </FirstFooterContent>
      <LineDiv />
      <SecondFooterContent>
        <DefaultLinks>
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Contato</a>
        </DefaultLinks>
      </SecondFooterContent>
    </FooterConfig>
  );
}

const FooterConfig = styled.footer`
  background: ${({ theme }) => theme.colors.footerColor};
  padding: 50px;
`;

const FirstFooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;

  h1{
      color: ${({ theme })=> theme.colors.text}
  }
  p{
    color: #939EA4;
  }

`;


const LineDiv = styled.hr`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: #cdd1d4;
`;

const SecondFooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
`;

const DefaultLinks = styled.div`
  padding: 20px;
  a {
    margin: 20px;
    padding: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondText};
  }
`;




