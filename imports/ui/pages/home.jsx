/**
 * Created by JohnBae on 3/8/17.
 */

import React, { Component } from 'react';
import Item from '../components/item/main.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Grid, Row, Col, FormGroup, Button, ResponsiveEmbed} from 'react-bootstrap';

var key = 0;

const BOOTSTRAP = "Bootstrap",
    CSS = "CSS",
    DRAFT_JS = "Draft Js",
    ELECTRON = "Electron",
    GULP = "Gulp",
    HTML = "HTML",
    IMMUTABLE_JS = "Immutable JS",
    INTERACT_JS = "Interact JS",
    JAVA = "Java",
    JAVA_SWING = "Java Swing",
    JAVASCRIPT = "Javascript",
    METEOR_JS = "Meteor JS",
    MONGO_DB= "Mongo DB",
    NODE_JS = "Node JS",
    R = "R",
    REACT = "React",
    REDUX = "Redux",
    WEEBLY = "Weebly";


var skillLayout = [
    BOOTSTRAP,
    CSS,
    DRAFT_JS,
    ELECTRON,
    GULP,
    HTML,
    IMMUTABLE_JS,
    INTERACT_JS,
    JAVA,
    JAVA_SWING,
    JAVASCRIPT,
    METEOR_JS,
    MONGO_DB,
    NODE_JS,
    R,
    REACT,
    REDUX,
    WEEBLY
];

var availProjects = [
    {
        title: "Trestle",
        skills: [CSS, DRAFT_JS, ELECTRON, GULP, IMMUTABLE_JS, INTERACT_JS, JAVASCRIPT,
            NODE_JS, REACT, REDUX],
        image: "trestle/trestle3.png",
        description: "Customizable Writing Application"
    },
    {
        title: "Bard",
        skills: [JAVA, JAVA_SWING],
        image: "bard/bard1.png",
        description: "IDE for Smith Interactive Fiction Engine"
    },
    {
        title: "Smith",
        skills: [JAVA, JAVA_SWING],
        image: "smith/smith2.png",
        description: "Scripting Engine for Interactive Fiction"
    },
    {
        title: "EACEF",
        skills: [CSS, HTML, JAVASCRIPT, WEEBLY],
        image: "eacef/eacef2.png",
        description: "Hanyang University Website"
    },
    {
        title: "Ryestory",
        skills: [BOOTSTRAP, CSS, JAVASCRIPT, METEOR_JS, MONGO_DB],
        image: "ryestory/ryestory3.png",
        description: "Website for my startup, Ryestory"
    },
    {
        title: "Scribe",
        skills: [JAVA, JAVA_SWING],
        image: "scribe/scribe4.png",
        description: "Minimalist Writing Application"
    },
    {
        title: "Keystroke Biometrics",
        skills: [R],
        image: "keystroke/keystroke1.png",
        description: "Keystroke Biometric Algorithm"
    }
]

export default class HomePage extends Component {

    constructor(props){
        super(props);

        this.state = {filter: []}
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(skill){

        var filter = this.state.filter.slice(),
            index = filter.indexOf(skill);
        if(index!= -1){
            filter.splice(index, 1);
        }
        else {
            filter.push(skill);
        }
        this.setState({filter: filter});

    }

    destructiveIntersection(a, b)
    {
        var result = [];
        while( a.length > 0 && b.length > 0 )
        {
            if      (a[0] < b[0] ){ a.shift(); }
            else if (a[0] > b[0] ){ b.shift(); }
            else /* they're equal */
            {
                result.push(a.shift());
                b.shift();
            }
        }

        return result;
    }

    render() {

        var self = this;
        console.log("Filters:", this.state.filter);
        var SkillOptions = skillLayout.map(function(elem){

            var selected = self.state.filter.indexOf(elem)!=-1;

            return(
                <Button onClick={()=>self.handleFilter(elem)}
                        className={selected ? "emptyButton category-button-selected" : "emptyButton category-button"}
                        key={key++}>
                        {elem}
                </Button>
            )
        });

        var isEmpty = 0;

        var Projects = availProjects.map(function (elem) {

            var intersects = self.destructiveIntersection(elem.skills.sort().slice(), self.state.filter.sort().slice());

            if(intersects.length == self.state.filter.length || self.state.filter.length == 0){

                return (
                    <Col key = {key++} xs = {12} md = {6}>
                        <Item title = {elem.title}
                              skills = {elem.skills}
                              image = {elem.image}
                              description = {elem.description}/>
                    </Col>
                )
            }
            else {
                isEmpty++;
            }

        });

        if(Projects.length == isEmpty){
            Projects = <p style={{textAlign: "center"}}>Sorry, no projects fit this criteria!</p>
        }

        return (
            <div style={{transition: "all .5s"}}>
                <div id="languageSelection">
                    <Button className="emptyButton" id="languageSelection-button"></Button>
                </div>
                <div className = "headerSection">
                    <h1>Hi, I'm John!</h1>
                    <img id="carrot" src="/assets/carrot.png"/>
                    <h3>Full-stack developer and UI/UX geek</h3>
                </div>

                <br/>

                <div className="section">
                    <p>
                        I’m a programmer working mostly with <b>Java</b>, <b>Javascript</b>, and <b>R</b> and
                        strive for <b>simplicity</b> and <b>usability</b> in UI/UX design.
                        <br/><br/>
                        Oh, and I'm a huge fan of <b>video games</b>, <b>The Lord of the Rings</b>, and <b>Star Wars</b>.
                    </p>
                </div>

                <div className="section">
                    <h2 className="category-title">Take a look at my work!</h2>
                    <div id="category">
                        <FormGroup>

                            {this.state.filter.length == 0 ?
                                <div>
                                    <p className="descriptionText">Filters: </p>
                                </div>
                                :
                                <div>
                                    <Button className="emptyButton category-clear"
                                            onClick={()=>this.setState({filter: []})}>Clear</Button>
                                    <p style={{display: "inline"}} className="descriptionText">
                                        Amount of filters: {this.state.filter.length}
                                    </p>
                                </div>}
                            {SkillOptions}

                        </FormGroup>
                    </div>
                    <Grid style = {{width: "auto"}}>
                        <Row className="show-grid">

                            <ReactCSSTransitionGroup
                                transitionName="itemContainerAnimation"
                                transitionAppear={true}
                                transitionAppearTimeout={500}
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={500}>
                                {Projects}
                            </ReactCSSTransitionGroup>

                        </Row>
                    </Grid>
                </div>

                <div className="section">
                    <h2 className="category-title">A little bit more about me...</h2>
                    <p> I am a genuine lover of programming - it's like playing with a limitless amount of Legos that actually work!
                        In addition, as you can probably tell by the website, I love practicality and minimalism in design.
                    </p>
                </div>

                <div className="section">
                    <h2 className="category-title" style={{textAlign: "center"}}>So, wanna build something cool together?</h2>
                    <Button
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