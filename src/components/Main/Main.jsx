import React from 'react';
import "./Main.scss";

export default function Main(props) {
    return (
        <main>
            {props.children}
        </main>
    )
}