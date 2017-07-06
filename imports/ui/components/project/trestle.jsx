/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import LightBox from '../../components/lightBox/main';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label} from 'react-bootstrap';

export default class Trestle extends Component{

    render(){

        console.log("Skills:", this.props);

        return(
            <div>
                <div className = "headerSection">
                    <h1>Trestle</h1>
                    <h3>The Customizable Writing App </h3>
                </div>

                <br/>

                <div className="project-section">

                    <h2 className="category-title">About</h2>

                    <br/>

                    <p>
                        Trestle is a <b>writing application</b> that allows users to <b>build</b> their own writing environment by
                        moving and resizing <b>widgets</b>.

                        Besides the writing widgets, other widgets like the <b>time</b> and <b>note</b> widget
                        allows additional features to be available. Utilizing widgets as the building block
                        of the application created feature <b>compartmentalization</b> and
                        consequently, a <b>minimalist</b> and <b>practical</b> design.
                    </p>

                    <br/>

                    <Button href="https://github.com/tyherox/trestle"
                            target="_blank">
                        <img style={{
                            height: "2rem",
                            marginRight: "10px",
                            verticalAlign: "middle"
                        }}src="/assets/github.png"/>
                        View on GitHub
                    </Button>
                    <Button target="_blank"
                            href="http://www.ryestory.com/home">
                        <img style={{
                            height: "2rem",
                            marginRight: "10px",
                            verticalAlign: "middle"
                        }}src="/assets/house.png"/>
                        Visit Home Page!
                    </Button>

                    <br/>

                </div>

                <div className="project-section">

                    <h2 className="category-title">Skills</h2>

                    <br/>

                    <div style={{width: "auto"}}>
                        <Label>CSS</Label>&nbsp;
                        <Label>Draft JS</Label>&nbsp;
                        <Label>Electron</Label>&nbsp;
                        <Label>Gulp</Label>&nbsp;
                        <Label>Immutable</Label>&nbsp;
                        <Label>Interact JS</Label>&nbsp;
                        <Label>Javascript</Label>&nbsp;
                        <Label>Node JS</Label>&nbsp;
                        <Label>React</Label>&nbsp;
                        <Label>Redux</Label>&nbsp;
                    </div>

                    <br/>

                </div>

                <div className="project-section">

                    <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>March 2017</p>
                    <h2 className="category-title">Final Product</h2>

                    <br/>

                    <Grid style = {{width: "auto"}}>
                        <Row className="show-grid">
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/trestle/gallery1.png"/>
                            </Col>
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/trestle/gallery2.png"/>
                            </Col>
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/trestle/gallery3.png"/>
                            </Col>
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/trestle/gallery4.png"/>
                            </Col>
                        </Row>
                    </Grid>
                    <br/>

                </div>

                <br/>
                <br/>
            </div>
        )
    }
}