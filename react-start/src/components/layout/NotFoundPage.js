import styles from "assets/css/NotFoundPage.module.css"
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className={styles.container}>
            <h1>
                <span>404</span> Not Found
            </h1>
            <h2>
                <Link to="/">Back To Home</Link>
            </h2>
        </div>
    )
}

export default NotFoundPage;