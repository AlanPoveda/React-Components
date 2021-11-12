import styles from "./Header.module.scss"


export default function Header(){
    return(
        <div className={styles.header}>
            <div>
                <h2>😳</h2>
            </div>
            <div>
                <h2>React Widgets 🎨</h2>
            </div>
            <div>
                <input className={styles.input} type="text"></input><button className={styles.buttonSearch}>search</button>
            </div>  
            
        </div>
    );
}