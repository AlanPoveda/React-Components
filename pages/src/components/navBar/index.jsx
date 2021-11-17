import styles from "./navBar.module.css"

export default function NavBar(){

    return(
        <div className={styles.divNavMenu}>
            <ul className={styles.listNav}>
                <li><a href="">Home</a></li>
                <li><a href="">Header</a></li>
                <li><a href="">Menus</a></li>
                <li><a className={styles.link} href="">Caroucell</a></li>
            </ul>
            
        </div>
    );
}