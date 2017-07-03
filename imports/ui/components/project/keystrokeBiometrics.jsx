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

                <hr />

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
                <br/>

                <h2 style={{marginBottom: "15px"}}>Skills</h2>
                <div style={{width: "auto"}}>
                    <Label>R</Label>&nbsp;
                </div>

                <br/>
                <br/>

                <hr />

                <h2 style={{marginBottom: "15px"}}>Screenshots</h2>
                <Grid style = {{width: "auto"}}>
                    <Row className="show-grid">
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/keystroke/keystroke1.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/keystroke/keystroke2.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/keystroke/keystroke3.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/keystroke/keystroke4.png"/>
                        </Col>
                    </Row>
                </Grid>

                <br/>
                <br/>
            </div>
        )
    }
}