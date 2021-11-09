import styles from "../header/Header.module.css"


export default function Header(){
    return(
        <div className={styles.header}>
            <div>
                <h2>😳</h2>
            </div>
            <div>
                <h2>React components 🎨</h2>
            </div>
            <div>
                <input className={styles.input} type="text"></input><button className={styles.buttonSearch}>search</button>
            </div>  
            
        </div>
    );
}