import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary() {

    const [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for the definition of ${keyword}`);

        let apiKey = "fea6579f5ctf53bb7491ae80ac32o60f";
        let word = "Flower";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);

        }

        function handleKeyword(event) {
            console.log(event.target.value);
            setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary"> 
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyword} autoFocus={true} placeholder="Enter a word here.." />
                <input type="button" value="Search" />
            </form>
        </div>
        );
}