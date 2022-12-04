import React from "react";

import "./SchoolInfo.css";

export class SchoolInfo extends React.Component{
    render() {
        return(
            <div>
                <img src={this.props.url} alt={this.props.school.Name}/>
                <div>
                    <h1>{this.props.school.Name}</h1>
                    <h2>{this.props.school.Title}</h2>
                    <h3>{this.props.school.Location}</h3>
                    <p>{this.props.school.Intro}</p>
                </div>
            </div>
        );
    }
}