import React from "react";
import ReactDOM from 'react-dom'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <>
        <Header/>
        <Main/>
    </>
);

