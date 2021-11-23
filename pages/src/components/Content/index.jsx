import styled from "styled-components";
import FirstContent from "../Content/FirstContent"
import SecondContent from "./SecondContent";

//Separando o local para o conteúdo
export default function Content() {
  return (
    <ContentHome>
      <FirstContent />
      <SecondContent />


    </ContentHome>
  );
}

//Muito importante para sobreposição de imagem
const ContentHome = styled.div`
    position: relative;
`;


