import styled from "styled-components"


export default function ContentKnowledge(props){

    return(
        <Content>
            <Title>{props.title}</Title>
            <Text>É necessário primeiro fazer uma aplicação <a href="https://pt-br.reactjs.org/">React</a></Text>
            
        </Content>
    );

}




const Title = styled.h1`
    color: ${({ theme })=>theme.colors.buttonColor};
`

const Content = styled.div`
    margin: 7% 25%;
`

const Text = styled.p`
    max-width: 40%;
    a{
        text-decoration: none;
    }

`