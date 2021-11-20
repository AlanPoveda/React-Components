import styled from "styled-components"

export default function Content(){


    return(
        <div>
            <Text>This is a content</Text>
        </div>
    );
}

const Text = styled.p`
  color: ${({ theme })=>theme.colors.text}  
`;