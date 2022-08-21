import React, { useEffect, useRef } from "react";
import useAxios from "./useAxios";

export default function App() {
    const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
    });

    console.log(loading, error, JSON.stringify(data));

    return (
    <div className="App">
        <h1>{data && data.status}</h1>
        <h2> {loading ? "Loading" : "Complete"} </h2>
        <button onClick={refetch}> Refetch </button>
    </div>
    );
}
