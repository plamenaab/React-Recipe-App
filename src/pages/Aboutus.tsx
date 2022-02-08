import React from "react";
import { Link } from "react-router-dom";

export default function Aboutus(){
    const sharedObject = {
        prop1: "value1",
        prop2: true,
        prop3: 123
      }
      const myString = btoa(JSON.stringify(sharedObject));
      const myLink = 'full#'+myString;
      return (<>
        <div>About us information</div>
    
        <div><Link to={myLink}>Full info</Link></div>
        <div><Link to={'simpe'}>Simple info</Link></div>
    
      </>);
}