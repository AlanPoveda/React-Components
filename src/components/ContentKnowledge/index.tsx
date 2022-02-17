import styled from "styled-components"


interface ContentPosts {
    posts: {
        id: string;
        title: string;
        post: string;
    }
}

export default function ContentKnowledge(){


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