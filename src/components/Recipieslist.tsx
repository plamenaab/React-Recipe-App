import React from 'react';
import { Link } from 'react-router-dom';
import {recepes} from './recepes';

export default function Recipieslist() {
  return (
  <>
    <h1>Recipies List</h1>
    <br />
    {recepes.map((element, index) =><Link to={index.toString()}>{element.name}<br /></Link>)}
  </>);
}
