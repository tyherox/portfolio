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



export default class Project extends Component{


    render(){

        var project = this.props.routeParams.id,
            ProjectView;
        console.log("PROJECT:", project);

        switch (project){
            case "trestle" : ProjectView = Trestle;
                break;
            case "bard" : ProjectView = Bard;
                break;
            case "smith" : ProjectView = Smith;
                break;
            case "eacef" : ProjectView = Eacef;
                break;
            case "ryestory" : ProjectView = Ryestory;
                break;
            case "scribe" : ProjectView = Scribe;
                break;
            case "keystroke biometrics" : ProjectView = KeystrokeBiometrics;
                break;

            default : ProjectView = Trestle;
        }

        return(
            <div>
                <ProjectView />
            </div>
        )
    }
}