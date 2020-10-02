import React from 'react';

const menu = [
    {"texto":"Home", "link":"index.html"},
    {"texto":"Contacto", "link":"contacto.html"},
    {"texto":"Nosotros", "link":"about.html"}
];

const Nav = () => menu.map((nav, i) => <a href={nav.link}><li key={i}>{nav.texto}</li></a>)

export default Nav;
