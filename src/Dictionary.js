import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function handlePexelsResponse(response) {
        console.log(response);
        setPhotos(response.data.photos);
    }

    function search() {
 // documentation: https://www.shecodes.io/learn/apis/dictionary
        let apiKey = "fea6579f5ctf53bb7491ae80ac32o60f";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);

        const pexelsApiKey = "jnCi4xOV94kKqoKqdEca2F0UdtCzGKSBfi6QrK1WhihqMjx1GYfbTSwV";
        const headers = { Authorization: ` ${pexelsApiKey}` };
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    } 




    function handleSubmit(event) {
        event.preventDefault();
        search();
        }

    function handleKeyword(event) {
        setKeyword(event.target.value);
} 
    function load() {
        setLoaded(true);
        search();
    }

        if (loaded) {
        return (
         <div className="Dictionary"> 
            <section>
                <h1>What are you looking for?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeyword} autoFocus={true} defaultValue={props.defaultKeyword} />
                    </form>
                    <div className="hint">
                        Suggested keywords: flower, sunset, nature, art..
                    </div>
                </section>
             <Results results={results} />
             <Photos photos={photos} />
            </div>
        );

    } else {
        load();
        return "Loading";
    }
}