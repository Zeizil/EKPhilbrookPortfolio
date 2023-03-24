import React, { useState } from 'react';

function Head() {
    return (
    <div>
        <h1><img id="flowers" src="./public/Images/IMG_3948.PNG" alt="cartoon skeleton with a pumpkin for a head" />Elizabeth Philbrook</h1>
        <nav>
            <h2><a href="#description">About Me</a></h2>
            <h2><a href="#projects">Work</a></h2>
            <h2><a href="#contactlinks">Contact</a></h2>
            <h2><a href="#resumedownload">Resume</a></h2>
        </nav>
        <img src="./public/Images/adi-goldstein-EUsVwEOsblE-unsplash.jpg" alt="lit up circuit board" id="circuits" />
    </div>
        
    )
}

export default Head;