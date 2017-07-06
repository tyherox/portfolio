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
                    <h1>Scribe</h1>
                    <h3>Minimalist Writing App Written in Java</h3>
                </div>

                <br />

                <div className="project-section">

                    <h2 className="category-title">About</h2>

                    <br/>

                    <p>
                        Scribe is a <b>minimalist</b> yet <b>practical</b> writing application that enhances <b>focus</b>.
                        <br/><br/>
                        It was written fully in Java and boasted features such as variety of themes, custom spellchecking,
                        custom scrollbars, <b>sentence focus</b> and more. It was a project that required a lot of design
                        and illustrations.
                    </p>

                    <br/>

                    <Button href="https://github.com/tyherox/Scribe"
                            target="_blank">
                        <img style={{
                            height: "2rem",
                            marginRight: "10px",
                            verticalAlign: "middle"
                        }}src="/assets/github.png"/>
                        View on GitHub
                    </Button>

                    <br/>

                </div>

                <div className="project-section">

                    <h2 style={{marginBottom: "15px"}}>Skills</h2>

                    <br/>

                    <div style={{width: "auto"}}>
                        <Label>Java</Label>&nbsp;
                        <Label>Java Swing</Label>&nbsp;
                        <Label>Foolishly custom coded everything...</Label>
                    </div>

                    <br/>

                </div>

                <div className="project-section">

                    <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>December 2016</p>
                    <h2 className="category-title">Final Product</h2>

                    <br/>

                    <Grid style = {{width: "auto"}}>
                        <Row className="show-grid">
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/scribe/scribe1.png"/>
                            </Col>
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/scribe/scribe2.png"/>
                            </Col>
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/scribe/scribe3.png"/>
                            </Col>
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/scribe/scribe4.png"/>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <br/>
                <br/>
            </div>
        )
    }
}