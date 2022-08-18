import { Oval } from "react-loader-spinner";
import styles from "assets/css/Loading.module.css"

function Loading() {
    return (
        <div className={styles.loadBar}>
            <Oval 
                color="#3d66ba"
                height={300}
                width={300}
                timeout={3000}
            />
        </div>
            
    )
}

export default Loading;