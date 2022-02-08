import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "../form.css";
import { recepes } from './recepes';

export default function Addreceipt() {
    const [redirect , setRedirect] = useState("");

    let receipename = "";
    let receipedesc = "";

    const submit = (e: React.SyntheticEvent) => {
        recepes.push({
            name: receipename,
            description: receipedesc
        });
        e.preventDefault();
        // send to BE for saving. using AXIOS / FETCH api
        setRedirect("/recipe");

    }
    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <>
            <form onSubmit={(e) => { submit(e) }} >
                <input type="text" className="form-control" id="floatingInput" placeholder="receipe name"
                    onChange={(e) => receipename = e.target.value} />
                <textarea className="form-control" onChange={(e) => receipedesc = e.target.value}></textarea>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Save</button>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAoklEQVR42mNISzvDQAZ2AOKZQPwAimdCxeBqyDX0DBD/R8NnkA0nx+CZWAyF4ZmUGPwAj8EPBp3BzkB8mdSgwBfTMkC8EsmAW8RGHq6YPgu14DOUD6IrgNiF2OSGL6ZheDUQyxEbbMREyCcgdiU1kkmKaXIMxhcUlylxMa7Iu0VpGONKbqDYL6ckVRDCZKdjmua84VkI0bQ8plkNQrM6jygMAKHTqWKK435AAAAAAElFTkSuQmCC" alt="Споделяне"></img>
            </form>
        </>
    );
}
