import Header from "../components/Header";
import { SideBar } from "../components/SideBar";
import ContentKnowledge from "../components/ContentKnowledge";



export default function KnowlagePage(){
        
    
    return(

        <div>
            <Header title="React-Widgets" linkButton="/knowledge" button="Documentação"/>
            <SideBar />
            <ContentKnowledge title="Básico" />
            
        </div>
    );

}

