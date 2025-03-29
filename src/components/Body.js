import React, { useState } from 'react';

function Body() {
    return (
        <div>
        <header>
            <h1><img id="flowers" src="./public/Images/IMG_3948.PNG" alt="cartoon skeleton with a pumpkin for a head" />Elizabeth Philbrook</h1>
        </header>
        <nav>
            <h2><a href="#description">About Me</a></h2>
            <h2><a href="#projects">Work</a></h2>
            <h2><a href="#contactlinks">Contact</a></h2>
            <h2><a href="#resumedownload">Resume</a></h2>
        </nav>
        
        <img src="./public/Images/adi-goldstein-EUsVwEOsblE-unsplash.jpg" alt="lit up circuit board" id="circuits" />

        <main>
            <aside>
                <h2 id="about">About Me</h2>
                <h2 id="work">Work</h2>
                <h2 id="contact">Contact</h2>
                <h2 id="resume">Resume</h2>
            </aside>

            <div>

                <section id="description">
                    <p>Elizabeth is a hardworking early career professional looking to work in software engineering, 
                        changing how the world does business. She exhibits strong technical skills and in-depth knowledge 
                        of the software development life cycle and Agile techniques as well as strong written and verbal 
                        communication skills. Additionally, she has teamwork experience and well-developed independent time 
                        management and problem-solving skills.</p>
                </section>

                <section id="projects">

                    <div class="worklinks">
                        <h3 id="firsttitle">Book Reviews Website</h3>
                        <a href="https://github.com/Zeizil/PersonalLibraryRepo"><img src="./public/Images/pankaj-patel-6JVlSdgMacE-unsplash.jpg" alt="part of css code" id="firstimg" /></a>
                    </div>
                    <div class="worklinks">
                        <h3 id="firsttitle">Thanksgiving Meal Planner</h3>
                        <a href="https://github.com/average-android/CookingRepo"><img src="./public/Images/Screenshot_20221114_091208.png" alt="Thanksgiving turkey from Norman Rockwell painting" id="workimg" /></a>
                    </div>
                    <div class="worklinks">
                        <h3 id="firsttitle">Quake Friends</h3>
                        <a href="https://earthquake-track.herokuapp.com/"><img src="./public/Images/830758-best-earthquake-wallpapers-2880x1800.jpg" alt="Thanksgiving turkey from Norman Rockwell painting" id="workimg" /></a>
                    </div>
                </section>

                <section id="contactlinks">
                
                    <ul>
                        <li>Phone: (603) 944-7306</li>
                        <li>Email: <a href="mailto: ekphilbrook@gmail.com">ekphilbrook@gmail.com</a></li>
                        <li>GitHub: <a href="https://github.com/Zeizil/PhilbrookPortfolio">Zeizil</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/elizabeth-philbrook/">Profile</a></li>
                    </ul>
                </section>
  
                <section id="resumedownload">
     
                    <h3><a href="./public/Elizabeth_Philbrook_Resume.pdf" download="Elizabeth_Philbrook_Resume">Download Resume</a></h3>
                </section>
            </div>
        </main>
    </div>
    )
}

export default Body;