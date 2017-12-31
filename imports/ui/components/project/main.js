/**
 * Created by JohnBae on 7/7/17.
 */

import React, { Component } from 'react';
import {Button, Label} from 'react-bootstrap';

export default class ProjectComponent extends Component{

    constructor(props){
        super(props);

        this.state = {showStory : false};
    }

    render(){

        var reusableKey = 0;
        let title = this.props.title,
            description = this.props.description,
            homeLink = this.props.homeLink,
            githubLink = this.props.githubLink;

        let content = this.props.content ? this.props.content.toJS() : "";

        let skillList = this.props.skills ? this.props.skills.sort().map(function(skill){

            return(
                <Label style={{marginRight: "5px"}} key = {reusableKey++}>{skill}</Label>
            )
        }) : "";

        let about =
            <div className="project-section" key = {reusableKey++}>

                <h2 className="category-title">About</h2>

                <br/>

                {this.props.about.toJS()}

                <br/>

                <hr/>

                <br/>

                {skillList}

                <br/>

                <br/>

                {githubLink ?
                    <Button href={githubLink}
                            target="_blank">
                        <img style={{
                            height: "2rem",
                            marginRight: "10px",
                            verticalAlign: "middle"
                        }}src="/assets/github.png"/>
                        View on GitHub!
                    </Button> : ""
                }

                {homeLink ?
                    <Button href={homeLink}
                            target="_blank">
                        <img style={{
                            height: "2rem",
                            marginRight: "10px",
                            verticalAlign: "middle"
                        }}src="/assets/house.png"/>
                        Visit Homepage!
                    </Button> : ""
                }

                <br/>

            </div>

        return(
            <div>
                <div className = "headerSection">
                    <h3 className="sectionSubTitle">{description}</h3>
                    <h1 className="sectionTitle">{title}</h1>
                </div>

                <br/>

                {about}

                <br/>

                {content}

                <br/>
                <br/>
            </div>
        )
    }
}