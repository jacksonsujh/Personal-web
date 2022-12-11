import React from "react";

import "./Home.css";
import {Education} from "../Education/Education";
import {Experience} from "../Experience/Experience";
import {Projects} from "../Projects/Projects";

export class Home extends React.Component{
    render() {
        return (
            <div>
                <div className="Background">
                    <div className="IntroTitle">
                        <h1><span>I</span> <span>Jackson Su</span></h1>
                        <h2 className="neon">A Software Engineer</h2>
                    </div>
                </div>
                <Education/>
                <Experience/>
                <Projects/>
            </div>
        );
    }
}
