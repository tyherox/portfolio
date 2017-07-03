/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import LightBox from '../../components/lightBox/main';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label} from 'react-bootstrap';

export default class TestNavBar extends Component{

    render(){
        return(
            <div>
                <div className = "headerSection">
                    <h1>Ryestory</h1>
                    <h3>Website for my Previous Startup</h3>
                </div>

                <hr />

                <p>
                    Ryestory was a <b>startup</b> I founded with a friend a year ago.

                    We created the foundation of products like Trestle, Scribe, Smith, and Bard but unfortunately
                    never got the chance to commercialize it. This was the website we created to <b>promote Trestle</b>, our
                    latest product for an Indiegogo campaign. It utilized a brand new library we found called <b>Meteor JS</b>
                    that allowed for quick and <b>easy prototyping</b>.
                </p>

                <br/>
                    <Button href="https://github.com/tyherox/ryestoryWebsite"
                            target="_blank">
                        <img style={{
                            height: "2rem",
                            marginRight: "10px",
                            verticalAlign: "middle"
                        }}src="/assets/github.png"/>
                        View on GitHub
                    </Button>
                    <Button href="http://ryestory.com"
                            target="_blank">
                        <img style={{
                            height: "2rem",
                            marginRight: "10px",
                            verticalAlign: "middle"
                        }}src="/assets/house.png"/>
                        View the Website!
                    </Button>
                <br/>
                <br/>

                <h2 style={{marginBottom: "15px"}}>Skills</h2>
                <div style={{width: "auto"}}>
                    <Label>Bootstrap</Label>&nbsp;
                    <Label>CSS</Label>&nbsp;
                    <Label>Javascript</Label>&nbsp;
                    <Label>Meteor JS</Label>&nbsp;
                    <Label>MongoDB</Label>
                </div>

                <br/>
                <br/>

                <hr />

                <h2 style={{marginBottom: "15px"}}>Screenshots</h2>
                <Grid style = {{width: "auto"}}>
                    <Row className="show-grid">
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/ryestory/ryestory1.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/ryestory/ryestory2.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/ryestory/ryestory3.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/ryestory/ryestory4.png"/>
                        </Col>
                    </Row>
                </Grid>
                <br/>
                <br/>
            </div>
        )
    }
}