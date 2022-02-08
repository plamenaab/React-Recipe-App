import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {recepes} from './recepes';

export default function Recipe() {
    let params = useParams();
    // let location = useLocation();
    // let navigate = useNavigate();
    // console.log(params);
    // console.log(location);
    // console.log(navigate);
    return (
        <>
            <b>Single recipe with id:{params.recipeid}</b>
            <p>Receipt name: {recepes[Number(params.recipeid)].name}</p>
            <div>Recipe description: {recepes[Number(params.recipeid)].description}</div>
        </>
    );
}
