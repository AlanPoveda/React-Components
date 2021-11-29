import Link from "next/link"
import styled from 'styled-components'



export default function LateralMenu(){

    return(
        <SideMenu>
            <dt>Documentação</dt>
                <dd><a href="">Basico</a></dd>
            <dt>Widgets</dt>
                <dd>Header</dd>

        </SideMenu>
    );


};

const SideMenu = styled.div`
    margin: 5% 10%;
    position: fixed;
    left: 0;
    dt{
        margin: 10px;
    }
`;