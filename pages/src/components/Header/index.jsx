import styled, { ThemeConsumer } from "styled-components"


export default function Header(){
    return(
        <HeaderDiv>
            <Title>Header</Title>
        </HeaderDiv>
    );
}


const Title = styled.h1`
    color: ${({ theme })=> theme.colors.text};
    text-align: center;
`;

const HeaderDiv = styled.div`
    background: ${({ theme }) => theme.colors.secondary};

`;