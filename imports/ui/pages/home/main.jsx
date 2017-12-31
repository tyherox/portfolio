/**
 * Created by JohnBae on 3/8/17.
 */

import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Projects from './projects.jsx';
import Filters from './filter.jsx';

export default class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {filter: []}
    }

    render() {

        return (
            <div style={{transition: "all .5s"}}>
                <div className = "headerSection">
                    <h1>Hi, I'm John!</h1>
                    <img id="carrot" src="/assets/carrot.png"/>
                    <h3>Full-stack developer and UI/UX geek</h3>
                </div>

                <br/>

                <div className="container-section">
                    <p>
                        I’m a programmer working mostly with <b>Java</b> and <b>Javascript</b> and
                        strive for <b>simplicity</b> and <b>usability</b> in UI/UX design. I enjoy starting random projects
                      and trying <b>new</b> things out. Although I mostly program and develop, I also invest heavily in <b>design</b> and keep my eye
                      out for <b>business opportunities</b>.
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