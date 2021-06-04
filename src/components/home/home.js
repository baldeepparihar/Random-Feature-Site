import React from 'react';
import './home.scss';


function Home() {
    return (
        <div className="Home">
            <div className="Home__Content--Wrapper">
                <div className="Home__Text--Wrapper">
                    <h1 className="Home__Header">Welcome to the Random Feature Site</h1>
                    <h4 className="Home__Header2">The site that shows you a bunch of random features.  Click the video below to find out more.</h4>
                </div>
                
                <div className="Home__Iframe--Wrapper">
                    <iframe className="Home__Iframe" src="https://player.vimeo.com/video/182592195" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="ContactInfo">
            <p className="ContactInfo-p">All rights reserved. Copyright © Baldeep Parihar, May 2021.</p>
            <p className="ContactInfo-p">'Random Feature Site' developed by Baldeep Parihar: bparihar1@yahoo.com 310 989 8024</p>
            </div >
        </div>
    )
}

export default Home
