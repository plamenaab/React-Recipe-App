import React, { useEffect, useState } from "react";
//fetch API
//XML HTTP Requests
//Axios

export default function Icndb() {
    const [theJoke, setTheJoke] = useState("The joke");
    //first way-> use 2 promises
    useEffect(() => {
        fetch('http://api.icndb.com/jokes/random')
            .then(x => x.json())
            .then(result => setTheJoke(result.value.joke))
    }, []);
    //second way-> use async/await
    useEffect(() => {
        const fetchData = async () => {
            let result = await fetch('http://api.icndb.com/jokes/random').then(x => x.json());
            setTheJoke(result.value.joke);
        }
        fetchData();
    }, []);
    return (
        <>
            <h1>Chuck Norris joke</h1>
            <div>{theJoke}</div>
        </>
    );
}