/**
 * Created by JohnBae on 3/8/17.
 */

import React, { Component } from 'react';
import Item from '../../components/item/main.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as Actions from "../../../actions/projectSelection";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, FormGroup, Button, ResponsiveEmbed} from 'react-bootstrap';
import Projects from './projects.jsx';
import Filters from './filter.jsx';
import * as Skills from '../../../constants/skills';
var key = 0;

export default class HomePage extends Component {

    constructor(props){
        super(props);

        this.state = {filter: []}
    }

    render() {

        return (
            <div style={{transition: "all .5s"}}>
                <div id="languageSelection">
                    <Button className="emptyButton" id="languageSelection-button"/>
                </div>
                <div className = "headerSection">
                    <h1>Hi, I'm John!</h1>
                    <img id="carrot" src="/assets/carrot.png"/>
                    <h3>Full-stack developer and UI/UX geek</h3>
                </div>

                <br/>

                <div className="container-section">
                    <p style={{fontSize: "1.5rem"}}>
                        I’m a programmer working mostly with <b>Java</b>, <b>Javascript</b>, and <b>R</b> and
                        strive for <b>simplicity</b> and <b>usability</b> in UI/UX design.
                        <br/><br/>
                        Oh, and I'm a huge fan of <b>video games</b>, <b>The Lord of the Rings</b>, and <b>Star Wars</b>.
                    </p>
                </div>

                <div className="container-section">
                    <h2 className="category-title">Take a look at my work!</h2>
                    <Filters/>
                    <Projects/>
                </div>

                <div className="container-section">
                    <h2 className="category-title">A little bit more about me...</h2>
                    <p> I am a genuine lover of programming - it's like playing with a limitless amount of Legos that actually work!
                        And as you can probably tell by the website, I love practicality and minimalism in design.
                    </p>
                </div>

                <div className="container-section">
                    <h2 className="category-title" style={{textAlign: "center"}}>So, wanna build something cool together?</h2>
                    <Button
                        className="emptyButton"
                        style={{width: "75%", marginLeft: "12.5%", marginRight: "12.5%"}}
                        bsStyle="primary"
                        bsSize="large"
                        href="mailto:john.uhyb@gmail.com">Heck yea!</Button>
                    <br/>

                    <p style={{textAlign: "center"}}>
                        or message me directly at: john.uhyb@gmail.com
                    </p>

                </div>

            </div>
        );
    }
}