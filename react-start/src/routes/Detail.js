import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "components/layout/Loading.js";
import MovieDetail from "components/MovieDetail.js";

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMovies = async (param) => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${param}`)
        ).json();
        setData((current) => json.data.movie);
        setLoading((current) => !current);
        console.log(json.data);
    }
        
    useEffect(() => {
        getMovies(id);
    }, [id]);
    
    return (
        <div>
            {loading 
                ? <Loading /> 
                : <MovieDetail 
                    img={data.large_cover_image}
                    title={data.title}
                    url={data.url}
                    rating={data.rating}
                    runtime={data.runtime}
                    id={data.id}
                    summary={data.description_full}
                />
        }
        </div>
    );
}

export default Detail;