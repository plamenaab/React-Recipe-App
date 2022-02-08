import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function RouteTest() {
  let location = useLocation();
  if(!location.hash){
    return(<>No info</>);
  }
  let sharedObject = atob(location.hash.substring(1));
  let myObject = JSON.parse(sharedObject);
  console.log(myObject);
  return (<div>
      info shared in {myObject.prop1}, {myObject.prop3}
  </div>);
}
