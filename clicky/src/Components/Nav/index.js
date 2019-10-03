import React, { Component } from "react";
function Nav(props) {
    return (
        <nav className="navbar">Header
        <ul>
                <li class="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li class>Click an image to begin!</li>
                <li class>
                    Score : {props.score} | Top Score: {props.topScore}
          </li>
            </ul>
        </nav>
        
    )
}
export default Nav;