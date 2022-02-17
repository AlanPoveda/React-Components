//import Header from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import ContentKnowledge from "../../components/ContentKnowledge";
import { GetStaticProps, GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import Head from 'next/head';

import { getPrismicClient } from "../../services/prismicConfiguration";
import Prismic from "@prismicio/client";
import { useState } from "react";
import { Opacity } from "styled-icons/material-twotone";

interface PostPreviewProps {
    post: {
        slug: string;
        title: string;
        content: string;
    };
}

export default function KnowlagePage({ post }:PostPreviewProps) {
    const [id, setId] = useState('bem-vindo')

    function handleClickButton(uid: string){
        setId(uid) 
    }

  
 
   
    return (
        <div>
            <SideBar uid={id} onSelectUID={handleClickButton}/>
            <ContentKnowledge title={post.title} content={post.content}/>
        </div>
    );
}



export const getServerSideProps: GetServerSideProps = async ({
    params
}) => {
    //saber se esta logado, ou quem esta e suas informaçoes

    const { slug } = params;


    //Call the post, serverside

    const prismic = getPrismicClient();

    const response = await prismic.getByUID<any>("components-content", String(slug), {});

const post = {
    slug: response.uid,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.post)
}
    
    
    

    return {
        props: {
            post,
        },
    };
};
