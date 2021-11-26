import Header from "../src/components/Header";
import Content from "../src/components/Content";
import BgImageFirstContent from "../src/components/BgImageFirst";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div>
      <BgImageFirstContent />
        <Header />
        <Content />
        <Footer />
    </div>
  );
}
