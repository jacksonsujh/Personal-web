import React from "react";

import "./Footer.css";

export class Footer extends React.Component{
    render() {
        return (
            <div className="FooterContainer">
                <div className="SectionContainer">
                    <div className="LogoSection">
                        Logo
                    </div>
                    <div className="FoodSection">
                        <h1>Experience</h1>
                        <p>SUA</p>
                        <p>CUA</p>
                        <p>Student Government</p>
                        <p>MARISA Volleyball</p>
                        <p>MARISA Swimming</p>
                        <p>Broadcasting Station</p>
                        <p>English Association</p>
                        <p>Student Council</p>
                    </div>
                    <div className="ProjectSection">
                        <h1>Projects</h1>
                        <p>The PrivateBIT</p>
                        <p>Ravenous</p>
                        <p>Jammming</p>
                        <p>Stock market</p>
                    </div>
                    <div className="ContactSection">
                        <h1>Contacts</h1>
                    </div>
                </div>
                <p>Copyright © 2022 Sujiahao - All Rights Reserved</p>
            </div>
        );
    }
}
