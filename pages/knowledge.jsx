import Header from "../src/components/Header";
import LateralMenu from "../src/components/LateralMenu";
import ContentKnowledge from "../src/components/ContentKnowledge";
import ReactMarkdown from "react-markdown";





export default function KnowlagePage(){

        
    
    return(

        <div>
            <Header title="React-Widgets" linkButton="/knowledge" button="Documentação"/>
            <LateralMenu />
            <ContentKnowledge title="Básico" />
            <ReactMarkdown />
        </div>
    );

}

