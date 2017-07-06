/**
 * Created by JohnBae on 5/26/17.
 */
import React, { Component } from 'react';
import Trestle from '../components/project/trestle.jsx';
import Bard from '../components/project/bard.jsx';
import Smith from '../components/project/smith.jsx';
import Eacef from '../components/project/eacef.jsx';
import Ryestory from '../components/project/ryestory.jsx';
import Scribe from '../components/project/scribe.jsx';
import KeystrokeBiometrics from '../components/project/keystrokeBiometrics.jsx';
import {browserHistory} from 'react-router';
import {Button} from 'react-bootstrap';

export default class Project extends Component{


    render(){

        var project = this.props.routeParams.id,
            ProjectView;

        var next = "";

        switch (project){
            case "trestle" : ProjectView = Trestle;
                next = "bard";
                break;
            case "bard" : ProjectView = Bard;
                next = "smith";
                break;
            case "smith" : ProjectView = Smith;
                next = "eacef";
                break;
            case "eacef" : ProjectView = Eacef;
                next = "ryestory";
                break;
            case "ryestory" : ProjectView = Ryestory;
                next = "scribe";
                break;
            case "scribe" : ProjectView = Scribe;
                next = "keystroke biometrics";
                break;
            case "keystroke biometrics" : ProjectView = KeystrokeBiometrics;

                break;

            default : ProjectView = Trestle;
        }

        var path = "/project/" + next;
        return(
            <div>
                <br/>
                <br/>
                <button className="emptyButton"
                        id="languageSelection-button"
                        style={{marginLeft: "0px", paddingLeft: "0px"}}
                        onClick={()=>browserHistory.push("/home")}>Back Home</button>
                <ProjectView />
                {next.length > 0 ? <Button onClick={()=>browserHistory.push(path)}
                                      bsStyle="primary"
                                      style={{float: "right"}}> Next Project: {next}</Button> : ""}
                <Button bsStyle="primary"
                        onClick={()=>browserHistory.push("/home")}>Back Home</Button>
                <br/>
                <br/>
            </div>
        )
    }
}