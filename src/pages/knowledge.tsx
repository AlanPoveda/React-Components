import Header from "../components/Header";
import { SideBar } from "../components/SideBar";
import ContentKnowledge from "../components/ContentKnowledge";
import { GetStaticProps } from 'next'
import { RichText } from "prismic-dom";

import { getPrismicClient } from '../services/prismicConfiguration';
import Prismic from '@prismicio/client' 

type Post = {
    id: string
    title: string
}

interface PropsPosts {
    posts: Post[];
    
}

export default function KnowlagePage({ posts }:PropsPosts){
        
    console.log(posts)
    console.log('estouaqui')
    
    

    
    
    return(

        <div>
            <Header title="React-Widgets" linkButton="/knowledge" button="Documentação"/>
            <SideBar posts={posts} />
            <ContentKnowledge title="Básico" />
            
        </div>
    );

}

//Chamada da api apra carregar a página uma unica vez, ainda mais para não consumir a banda
export const getStaticProps: GetStaticProps = async () => {

    const prismic = await getPrismicClient()

    const response = await prismic.query<any>([
        Prismic.predicates.at('document.type', 'components-content' )
    ], {
        fetch: ['title', 'content'],
        pageSize: 100
    })

    const posts = response.results.map((post)=>{
        return {
            title: RichText.asText(post.data.title),
            id: post.id
        }
    })

    return {
        props: {
            posts
        }
    }
}