import { NextApiResponse, NextApiRequest } from 'next';
import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../services/prismicConfiguration";
import Prismic from "@prismicio/client";


export default async function titles(request: NextApiRequest, response:NextApiResponse) {


    const prismic = await getPrismicClient();

    
    const res = await prismic.query<any>(
        [Prismic.predicates.at("document.type", "components-content")],
        {
            fetch: ["title", "content"],
            pageSize: 100,
        },
    );

   
    const posts = res.results.map((post) => {
        return {
            title: RichText.asText(post.data.title),
            id: post.id,
            slug: post.uid,
            post: RichText.asHtml(post.data.post)
        };
    });
    
    return response.json(posts);
}