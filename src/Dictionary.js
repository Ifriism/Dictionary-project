import React, { useState } from "react";
import "./Dictionary.css";


export default function Dictionary() {

    const [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for the definition of ${keyword}`);

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