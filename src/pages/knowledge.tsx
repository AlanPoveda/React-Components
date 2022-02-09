import Header from "../components/Header";
import { SideBar } from "../components/SideBar";
import ContentKnowledge from "../components/ContentKnowledge";
import { GetStaticProps } from 'next'


import { getPrismicClient } from '../services/prismicConfiguration';
import Prismic from '@prismicio/client' 



export default function KnowlagePage(){
        
    
    return(

        <div>
            <Header title="React-Widgets" linkButton="/knowledge" button="Documentação"/>
            <SideBar />
            <ContentKnowledge title="Básico" />
            
        </div>
    );

}

//Chamada da api apra carregar a página uma unica vez, ainda mais para não consumir a banda
export const getStaticProps: GetStaticProps = async () => {

    const prismic = await getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'widget-information' )
    ], {
        fetch: ['title', 'content'],
        pageSize: 100
    })

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {}
    }
}