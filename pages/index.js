import Image from 'next/image'


import Header from "./src/components/Header"
import RightMenu from './src/components/RightMenu'
import NavBar from './src/components/NavBar'
import ContentWidget from './src/components/contentWidget'

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
