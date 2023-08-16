import React from "react";

export function App() {
    return (
        <div class="masterDiv">
            <h1> Welcome Micah {new Date().toString() } </h1>
            <div class="button">
            <button class="enterButton">Press to enter list</button>
            </div>
        </div>
    );
};