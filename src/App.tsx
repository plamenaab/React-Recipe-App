import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipe from './components/Recipe';
import RouteTest from './components/RouteTest';
import Addreceipt from './components/Addreceipt';
import Icndb from './components/Icndb';
import Icnfba from './components/Icnfba';
import Recipieslist from './components/Recipieslist';
import Aboutus from './pages/Aboutus';
import Weather from './components/Weather';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path={'/'}></Route>
        <Route path={'/recipe'} element={<Recipieslist/>}></Route>
        <Route path={'/aboutus'} element={<Aboutus/>}></Route>
        <Route path={'/recipe/:recipeid'} element={<Recipe />}></Route>
        <Route path={'/icndbf'} element={<Icndb/>}></Route>
        <Route path={'/icndba'} element={<Icnfba/>}></Route>
        <Route path={'/weather'} element={<Weather />}></Route>
        <Route path={'/aboutus/:info'} element={<RouteTest/>}></Route>
        <Route path={'/addreceipe'} element={<Addreceipt />}></Route>
        <Route path={'*'} element={<>Nothing there</>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
