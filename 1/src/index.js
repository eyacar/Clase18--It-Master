import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './menu';
import Imagen from './imagen'
import './index.css';

const Titulo = () => <h1>EL titulo</h1>

const App = () =>(
 <>
 <header><Titulo /></header>
 <nav><ul><Nav /></ul></nav>
 ,
 <Imagen />
 </>
) 


ReactDOM.render(<App />,document.getElementById('root'));

