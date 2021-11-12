import Image from 'next/image'
import styles from './page.module.css'

import Header from "./src/components/Header/index"
import RightMenu from './src/components/RightMenu/index'
import NavBar from './src/components/NavBar/index'
import ContentWidget from './src/components/contentWidget/index'

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.principalContent}>
        <NavBar />
        <ContentWidget />
        <RightMenu />
      </div>
     

  
    </div>
  )
}
