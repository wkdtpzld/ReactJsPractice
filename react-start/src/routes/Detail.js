import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const getMovies = async (param) => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${param}`)
        ).json();
        console.log(json);
    }
        
    useEffect(() => {
        getMovies(id);
    }, [id]);
    
    return <h1>Details</h1>
}

export default Detail;