import React from 'react';
import './resume.scss';

function Resume() {
    return (
        <div className="BG__Color">
            <div className="Resume">
                <div className="Resume__Left--Container">
                    <div className="Resume__Left">
                        <div className="Resume__Header">
                            <h2>Baldeep Parihar</h2>
                            <h3>Full Stack Web Developer</h3>
                        </div>
                        <div className="Resume__Projects">
                            <h3>Projects</h3>
                            <p><span>A Night At Home:</span>This app takes the concept of “Netflix and Chill,” and expands on it. 
                                Working in SASS, JavaScript, React, Node.js and Express.js I built a custom data file to get the 
                                functionality I was seeking. Now you can search globally for new releases from around the world on 
                                Netflix by region/country. Also if you desire you can also find cocktail and cuisine options from 
                                those countries as well. You can curate your perfect night at home or throw a theme party and invite 
                                all of your friends as you will have plenty of drink and food recipes from around the world. 
                                https://a-night-at-home-client-side.netlify.app</p>
                            <p><span>The Random Feature Site:</span>A curated collection of not so random, "Random Features."  From a
                                coffee table search like you would see on online furniture website, to a note pad that allows you to
                                jot down daily tasks.  You can also edit and remove the tasks and check them off once you are done.  
                                The site  also features a resume page where you can add skill tags and upload a cover letter.</p>
                        </div>
                        <div className="Resume__Experience">
                            <h3>Experience</h3>
                            <h4>Customer Success Agent | Augusta Precious Metals</h4>
                            <h5>Feb 2020 - May 2020, Los Angeles, CA</h5>
                            <ul>
                                <li>Liaised with potential customers to provide unique retirement solutions to fit their portfolio and 
                                    financial needs. Demonstrated punctuality and organization on a daily-basis by placing a high volume 
                                    of outgoing calls to a potential client base to build sustainable relationships.</li>
                            </ul>
                            
                            <h4>Server & Bartender | Spring Street Smokehouse</h4>
                            <h5>Aug 2018 - July 2019, Los Angeles, CA</h5>
                            <ul>
                                <li>Provided direct 1 on 1 customer support to address all customer inquiries and requests.Served guests 
                                    in an engaging manner and recommended products based on their specific needs.</li>
                            </ul>

                            <h4>Server & Bartender | SnAKS Cafe SAKS Fifth Ave</h4>
                            <h5>March 2007 - Feb 2018, Beverly Hills, CA</h5>
                            <ul>
                                <li>Led a team of 5 people which in involved training staff and handling employee relations. Responsible 
                                    for ensuring the client experience was positive and exceeded all expectations.</li>
                            </ul>
                        </div>
                        <div className="Resume__Education">
                            <h3>Education</h3>
                            <h4>BrainStation | Diploma in Web Development</h4>
                            <h5>Jan 2021 - April 2021, Vancouver BC</h5>
                            <h4>British Columbia Institute of Technology | Diploma in Business Administration</h4>
                        </div>
                    </div>
                </div>
                <div className="Resume__Right--Container">
                    <div className="Resume__Right">
                        <div className="Resume__Contact-Info">
                        <h3>Bparihar1@yahoo.com</h3>
                        <p>https://linkedin.com/baldeepparihar</p>
                        <p>https://github.com/baldeepparihar</p>
                        </div>
                        <div className="Resume__Skills">
                            <h3>skills</h3>
                            <p>HTML, CSS, SASS, BEM, JavaScript, React, Node.js, Express.js, Agile, Kanban, Git, Git Flow, GitHub, MySQL</p>
                        </div>
                        <div className="Resume__Career-Summary">
                            <h3>career summary</h3>
                            <p>With a background in the creative arts, I am excited to focus that passion and creativity towards Web Development.  I love continuously learning and tackling new challenges.</p>
                            <p>I have developed many soft-skills, such as effective interpersonal communication as well as sales and leadership qualities.  I am eager to apply my eye for design and love of learning to my next role in Web Development.</p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Resume;
