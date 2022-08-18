import styles from "assets/css/detail.module.css"

function MovieDetail({img, title, url, rating, runtime, id, summary}) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={img} alt={id} />
            </div>
            <div className={styles.data}>
                <div className={styles.dataBox}>
                    <h1><span> {title} </span></h1>
                    <h2 className={styles.url}>
                        <a href={url}>Go To MovieSite</a>
                    </h2>
                    <h2> Rating = {rating}</h2>
                    <h2> RunTime = {runtime} Minutes</h2>
                    <p> {summary}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;