import Image from "next/image";
import homeImage from "../../assets/logo.svg";
import styled from "styled-components";


export default function BgImageFirstContent(){

    return(
        <ImageConfig>
            <Image src={homeImage} alt="firstImage"/>
        </ImageConfig>
    );
}

const ImageConfig = styled.div`
    right: 0;
    position: absolute;
    

`