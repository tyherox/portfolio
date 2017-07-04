/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import LightBox from '../../components/lightBox/main';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label} from 'react-bootstrap';

export default class Trestle extends Component{

    render(){
        return(
            <div>
                <div className = "headerSection">
                    <h1>Trestle</h1>
                    <h3>The Customizable Writing App </h3>
                </div>

                <br/>

                <p>
                    Trestle is a <b>writing application</b> that allows users to <b>build</b> their own writing environment by
                    moving and resizing <b>widgets</b>.
                    <br/><br/>
                    Besides the writing widgets, other widgets like the <b>time</b> and <b>note</b> widget
                    allows additional features to be available. Utilizing widgets as the building block
                    of the application created feature <b>compartmentalization</b> and
                    consequently, a <b>minimalist</b> and <b>practical</b> design.
                </p>

                <br/>

                <div>

                    <h2 style={{marginBottom: "15px"}}>Skills and Tools</h2>
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
                </div>

                <br/>
                <br/>

                <hr />

                <h2 style={{marginBottom: "15px"}}>Screenshots</h2>
                <Grid style = {{width: "auto"}}>
                    <Row className="show-grid">
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/trestle/trestle1.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/trestle/trestle2.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/trestle/trestle3.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/trestle/trestle4.png"/>
                        </Col>
                    </Row>
                </Grid>

                <br/>
                <br/>
            </div>
        )
    }
}