import Image from 'next/image'


import Header from "./src/components/Header/index"
import RightMenu from './src/components/RightMenu/index'
import NavBar from './src/components/NavBar/index'
import ContentWidget from './src/components/contentWidget/index'

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <NavBar />
        <ContentWidget />
        <RightMenu />
      </div>
    </div>
  )
}
