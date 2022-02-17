import { useEffect, useState } from "react";
import styled from "styled-components"
import { api } from "../../services/api";


interface ContentPosts {
    
        title: string;
        content: string;
    
}

export default function ContentKnowledge( {title, content}: ContentPosts){

    return(
        <Content>
            <Title>{title}</Title>
            <Text dangerouslySetInnerHTML={{ __html: content }} />
        </Content>
    );

}




const Content = styled.div`
    margin: 7% 25%;
`

const Title = styled.h1`
    color: ${({ theme })=>theme.colors.buttonColor};
`



const Text = styled.div`
    max-width: 40%;
    a{
        text-decoration: none;
    }

`