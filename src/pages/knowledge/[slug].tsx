//import Header from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import ContentKnowledge from "../../components/ContentKnowledge";
import { GetStaticProps, GetServerSideProps } from "next";
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../services/prismicConfiguration";
import Prismic from "@prismicio/client";

type Post = {
    id: string;
    title: string;
    content: string;
};

interface PropsPosts {
    posts: Post[];
}

export default function KnowlagePage({ posts }: PropsPosts) {
    console.log(posts);

    // <Header title="React-Widgets" linkButton="/knowledge" button="Documentação"/>

    return (
        <div>
            <SideBar posts={posts} />
            <ContentKnowledge post={posts} />
        </div>
    );
}

//Chamada da api apra carregar a página uma unica vez, ainda mais para não consumir a banda
export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const prismic = await getPrismicClient();

    
    const response = await prismic.query<any>(
        [Prismic.predicates.at("document.type", "components-content")],
        {
            fetch: ["title", "content"],
            pageSize: 100,
        },
    );

   
    const posts = response.results.map((post) => {
        return {
            title: RichText.asText(post.data.title),
            id: post.id,
            slug: post.uid,
            post: RichText.asHtml(post.data.post)
        };
    });
    console.log(posts)

    return {
        props: {
            posts,
        },
    };
};
