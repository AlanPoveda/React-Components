import Image from "next/image";
import homeImage from "../../assets/first-image.svg";
import styled from "styled-components";


export default function BgImageFirstContent(){

    return(
        <ImageConfig>
            <Image 
            src={homeImage} 
            alt="firstImage"
            width={800}
            height={800}
            />
        </ImageConfig>
    );
}

//Muito importante para a sobreposição da imagem, como backGround
const ImageConfig = styled.div`
   right: 0;
   position: absolute;
   


`