import styles from "./RightMenu.module.css"

export default function RightMenu(){

    return(
        <div className={styles.menu}> 
            <ul>
            <h3>Indice</h3>
                <li className={styles.list}><a className={styles.link} href="#">Header</a></li>
                <li className={styles.list}><a className={styles.link} href="#">body</a></li>
                <li className={styles.list}><a className={styles.link} href="#">footer</a></li>
            </ul>
        </div>
    );
}