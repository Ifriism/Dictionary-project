import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
    if (props.meaning) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>

            <div className="Definition">{props.meaning.definition}</div>
                
                {props.meaning.example && (
                    <div className="Example">
                        <em>{props.meaning.example}</em>
                        <br />
                        <Synonyms synonyms={props.meaning.synonyms} />
                    </div>
                )}
        </div>
        );
     }
    }