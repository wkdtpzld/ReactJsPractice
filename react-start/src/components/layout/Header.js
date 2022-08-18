import styles from "assets/css/header.module.css"
import { Link } from "react-router-dom";

function Header() {

    return (
        <nav>
            <h2 className={styles.logo}><Link to="/">Movie Lookie</Link></h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">Bottom</Link></li>
                <li><Link to="#">Contact Me</Link></li>
            </ul>
            <button type="button" className={styles.btn}>Nothing</button>
        </nav>
    )

}

export default Header;