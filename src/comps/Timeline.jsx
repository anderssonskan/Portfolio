import React from "react";
import './Timeline.css';

function Timeline() {
    return(
        <div class="timeline">
            <div class="container right">
                <div class="content">
                    <h2>Pilskolan</h2>
                    <h3> 2018-2023 Uppsala, Elevassistent</h3>
                    <p>Resursskola, låg- och mellanstadiet, med inrikting på barn inom NPF-spektrat.</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Södersjukhuset</h2>
                    <h3> 2017-2018 Stockholm, Bemanningsassistent</h3>
                    <p>Ansvar över bemanningen på akutavdelningen.</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Sveriges television m.m</h2>
                    <h3> 2015-2017 Stockholm, olika befattningar</h3>
                    <p>Många olika projektanställningar. Bl.a Musikhjälpen, Eurovision Song Contest och Jul med Ernst.</p>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h2>Tvproduktionsspecialist</h2>
                    <h3>2014-2016 Gamleby folkhögskola</h3>
                </div>
            </div>
        </div>
    )
}

export default Timeline;