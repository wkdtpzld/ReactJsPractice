import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styles from "assets/css/movie.module.css"

function Movie({coverImg, title, summary, genres, id}) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <img src={coverImg} alt={title} />
                </div>
                <h2>
                    {title}
                </h2>
                <p>
                    {summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}
                </p>
                <ul>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
                <Link to={`/movie/${id}`}>Read More</Link>
            </div>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;