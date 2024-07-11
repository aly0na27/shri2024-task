import React from "react";
import ReactDOM from 'react-dom'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import '../styles.css'
import '../reset.css'

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <>
        <Header/>
        <Main/>
    </>
);

