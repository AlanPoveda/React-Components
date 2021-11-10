import styles from "../rightMenu/RightMenu.module.scss"

export default function RightMenu(){

    return(
        <div className={styles.menu}> 
            <ul>
            <h3>Indice</h3>
                <li><a href="#">Header</a></li>
                <li><a href="#">body</a></li>
                <li><a href="#">footer</a></li>
            </ul>
        </div>
    );
}