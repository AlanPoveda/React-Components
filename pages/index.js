import Image from 'next/image'
import styles from './page.module.css'

import Header from "./src/components/Header/index.jsx"
import RightMenu from './src/components/RightMenu/index.jsx'
import NavBar from './src/components/NavBar/index.jsx'
import ContentWidget from './src/components/contentWidget/index.jsx'

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
