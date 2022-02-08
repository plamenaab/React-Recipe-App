import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Icnfba() {
    const [theJoke, setTheJoke] = useState("The Axios JOKE");
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios('http://api.icndb.com/jokes/random');
            console.log(data);
            setTheJoke(data.value.joke);
        }
        fetchData();
    }, []);
    return (
        <>
            <h1>Axios get joke</h1>
            <div>{theJoke}</div>
        </>
    )
}