import Image from 'next/image'
import styles from './page.module.css'

import Header from "./src/components/Header"
import RightMenu from './src/components/RightMenu'
import NavBar from './src/components/NavBar'
import ContentWidget from './src/components/contentWidget'

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
