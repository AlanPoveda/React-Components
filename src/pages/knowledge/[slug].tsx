//import Header from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import ContentKnowledge from "../../components/ContentKnowledge";
import { GetStaticProps, GetServerSideProps } from "next";
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../services/prismicConfiguration";
import Prismic from "@prismicio/client";
import { useState } from "react";

type Post = {
    id: string;
    title: string;
    content: string;
};

interface PropsPosts {
    posts: Post[];
}

export default function KnowlagePage() {
    const [id, setId] = useState('bem-vindo')

    function handleClickButton(uid: string){
        setId(uid) 
    }
    // <Header title="React-Widgets" linkButton="/knowledge" button="Documentação"/>
    return (
        <div>
            <SideBar uid={id} onSelectUID={handleClickButton}/>
            <ContentKnowledge />
        </div>
    );
}
