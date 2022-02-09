import Header from "../components/Header";
import Content from "../components/Content";
import BgImageFirstContent from "../components/BgImageFirst";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <BgImageFirstContent />
            <Header
                title="React-Widgets"
                button="Documentação"
                linkButton="/knowledge"
            />
            <Content />
            <Footer />
        </>
    );
}
