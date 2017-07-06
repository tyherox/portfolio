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
                    <h1>Keystroke Biometrics</h1>
                    <h3>Optimization of 2009 Keystroke Biometrics Study</h3>
                </div>

                <br />

                <div className="project-section">

                    <h2 className="category-title">About</h2>

                    <br/>

                    <p>
                        This research was done with <a href="https://www.cs.cmu.edu/~maxion/pubs/KillourhyMaxion09.pdf" target="_blank">
                        Carnegie Melon's 2009 publication</a> of <b>anomaly detection algorithms</b> for keystroke dynamics.
                        <br/><br/>
                        The optimization that I came up with was a tweak in variable for the <b>Mahalanobis distance</b>. It resulted
                        in an accuracy increase by <b>1.7%</b>.
                    </p>

                    <br/>

                    <Button href="https://github.com/tyherox/Keystroke-Dynamics"
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
                        <Label>R</Label>&nbsp;
                    </div>

                    <br/>

                </div>

                <div className="project-section">

                    <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>June 2016</p>
                    <h2 className="category-title">Final Product</h2>

                    <br/>

                    <Grid style = {{width: "auto"}}>
                        <Row className="show-grid">
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/keystroke/keystroke1.png"/>
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