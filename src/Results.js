import React from "react";
import Meaning from "./Meaning"

export default function Results(props) {
        if (props.results) {
            return ( 
            <div className="Results">
                <section>
                <h2>{props.results.word}</h2>
                {props.results.phonetic && (
                    <div className="Phonetic">
                        <span>/{props.results.phonetic}/</span>
                    </div>
                )}
                </section>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                    <div key={index}> 
                    <Meaning meaning={meaning} />
                    </div>
                    );
                })}
                <br />
            </div>
            );
        } else {
            return null;
        }
} 