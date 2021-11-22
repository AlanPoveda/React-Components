import Header from "./src/components/Header";
import Content from "./src/components/Content";
import BgImageFirstContent from "./src/components/BgImageFirst";

export default function Home() {
  return (
    <div>
      <BgImageFirstContent />
        <Header />
        <Content />
    </div>
  );
}
