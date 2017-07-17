/**
 * Created by JohnBae on 5/26/17.
 */
import React, { Component } from 'react';
import projects from '../../constants/projects/main';
import ProjectView from '../components/project/main'
import {browserHistory} from 'react-router';
import {Button} from 'react-bootstrap';

export default class Project extends Component{


    render(){

        var projectName = this.props.routeParams.id;

        var selectedProject = projects.find(function(project){
            return project.get("title").toLowerCase() == projectName;
        });

        var selectedIndex = projects.indexOf(selectedProject);

        var title = selectedProject.get("title"),
            description = selectedProject.get('description'),
            about = selectedProject.get('about'),
            skills = selectedProject.get('skills'),
            content = selectedProject.get('content'),
            githubLink = selectedProject.get('githubLink'),
            homeLink = selectedProject.get('homeLink');

        var next = "";
        var nextIndex = projects.findIndex(function(project){
            return projects.indexOf(project) == selectedIndex + 1;
        });

        var nextProject = projects.get(nextIndex).get("title");

        console.log(nextProject);

        var path = "/project/" + nextProject.toLowerCase();
        return(
            <div>
                <br/>
                <br/>
                <button className="emptyButton"
                        id="languageSelection-button"
                        style={{marginLeft: "0px", paddingLeft: "0px"}}
                        onClick={()=>browserHistory.push("/home")}>Back Home</button>
                <ProjectView title={title}
                             description={description}
                             about={about}
                             skills={skills}
                             githubLink={githubLink}
                             homeLink={homeLink}
                             content={content}/>
                {nextProject.length > 0 ? <Button onClick={()=>browserHistory.push(path)}
                                      bsStyle="primary"
                                      style={{float: "right"}}> Next Project: {nextProject}</Button> : ""}
                <Button bsStyle="primary"
                        onClick={()=>browserHistory.push("/home")}>Back Home</Button>
                <br/>
                <br/>
            </div>
        )
    }
}