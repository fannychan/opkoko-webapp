import React, { Component } from 'react';
import background from '../images/background.jpg';
function Landing() {
    return (
    <div style = {{backgroundImage: `url(${background})`}}>
        <h1>OPKOKO</h1>

    </div>
    );
}

export default Landing;