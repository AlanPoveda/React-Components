import styles from "../ContentWidget/contentWidget.module.css"

export default function ContentWidget(){

    return(
        <div className={styles.textArticle}>
            <h1>Content</h1>
            <p>This a widget content, to make the articles to see the codes </p>
            <p>very happy for this project</p>
        </div>
    );
}