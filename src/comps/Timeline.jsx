import React from "react";
import './Timeline.css';
import sunflower from '../assets/sunflower.png';
import plant from '../assets/plant-pot.png';

function Timeline() {
    return (
        <div class="timeline">
            <div className="timeline-header">
                <h5>Utbildning</h5>
                <img className="sunflower" src={sunflower} alt="Flower" />
                <h5>Erfarenhet</h5>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Easy Digital Meeting Services AB</h2>
                    <h3> Frontendutvecklare <br />2024-2025 Uppsala</h3>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h2>Frontendutvecklare</h2>
                    <h3>Jensen yrkeshögskola <br />2023-2025 Kista</h3>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Pilskolan</h2>
                    <h3>Elevassistent <br />2018-2023 Uppsala</h3>
                    <p>Resursskola, låg- och mellanstadiet, med inrikting på barn inom NPF-spektrat.</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Södersjukhuset</h2>
                    <h3>Bemanningsassistent <br /> 2017-2018 Stockholm</h3>
                    <p>Ansvarat över bemanningen på akutavdelningen.</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Sveriges television m.m</h2>
                    <h3>Olika befattningar <br />2015-2017 Stockholm</h3>
                    <p>Många olika projektanställningar. Bl.a Musikhjälpen, Eurovision Song Contest och Jul med Ernst.</p>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h2>Tv-produktionsspecialist</h2>
                    <h3>Gamleby folkhögskola <br />2014-2016 Gamleby</h3>
                </div>
            </div>
            <img className="plant-pot" src={plant} alt="plant-pot" />
        </div>
    )
}

export default Timeline;