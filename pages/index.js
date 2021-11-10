import Image from 'next/image'


import Header from "./src/components/header/index"
import RightMenu from './src/components/rightMenu/index'
import NavBar from './src/components/navBar/index'

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <RightMenu />

  
    </div>
  )
}
