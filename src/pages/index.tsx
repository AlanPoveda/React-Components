import Header from "../components/Header";
import BgImageFirstContent from "../components/BgImageFirst";
import Footer from "../components/Footer";

import FirstContent from "../components/Content/FirstContent";
import SecondContent from "../components/Content/SecondContent";
import ThirdContent from "../components/Content/ThirdContent";
import FifthContent from "../components/Content/FifthContent";
export default function Home() {
    return (
        <>
        
            <BgImageFirstContent />
            <Header
                title="React-Widgets"
                button="Documentação"
                linkButton="/knowledge"
            />
            <FirstContent />
            <SecondContent />
            <ThirdContent />
            <FifthContent />
            <Footer />
        </>
    );
}
