import { useEffect, useState } from "react";
import styled from "styled-components"
import { api } from "../../services/api";


interface ContentPosts {
    posts: {
        id: string;
        title: string;
        post: string;
    }
}

export default function ContentKnowledge(){
    const [title, setTitle] = useState([])

    useEffect(() => {
        api.get('/api/titles/').then(response => {
            setTitle(response.data);
        })
    },[])
    console.log(title);

    return(
        <Content>
            <Title></Title>
            <Text ></Text>

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