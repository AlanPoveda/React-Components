import styled from "styled-components";
import FirstContent from "../Content/FirstContent"
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";
import FourthContent from "./FourthContent";

//Separando o local para o conteúdo
export default function Content() {
  return (
    <ContentHome>
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />


    </ContentHome>
  );
}

//Muito importante para sobreposição de imagem
const ContentHome = styled.div`
    position: relative;
`;


