import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";


export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://www.shecodes.io/learn/apis/dictionary
        let apiKey = "fea6579f5ctf53bb7491ae80ac32o60f";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);

        }

        function handleKeyword(event) {
            setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary"> 
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyword} autoFocus={true} placeholder="Enter a word.." />
            </form>

            <Results results={results} />

        </div>
        );
}