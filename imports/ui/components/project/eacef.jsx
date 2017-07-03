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
                    <h1>Euro Asia Civil Engineering Forum (EACEF)</h1>
                    <h3>International Conference Website for Hanyang University</h3>
                </div>

                <hr />

                <p>
                    This website was for <b>professor</b> who wanted a website done for an
                    <b>international conference</b> as soon as possible.
                    <br/><br/>
                    I heavily utilized <a href="https://weebly.com" target="_blank">Weebly</a> as the criteria
                    did not require a custom coded website. This job required <b>constant</b> communication with the
                    professor and his associates with the design incorporating <b>familiar</b> Korean web design themes.
                </p>

                <br/>
                    <Button href="http://eacef2017.hanyang.ac.kr/"
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
                    <Label>CSS</Label>&nbsp;
                    <Label>HTML</Label>&nbsp;
                    <Label>Javascript</Label>&nbsp;
                    <Label>Weebly</Label>&nbsp;
                    <Label>Paypal</Label>&nbsp;
                    <Label>TicketTailor</Label>
                </div>

                <br/>
                <br/>

                <hr />

                <h2 style={{marginBottom: "15px"}}>Screenshots</h2>
                <Grid style = {{width: "auto"}}>
                    <Row className="show-grid">
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/eacef/eacef1.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/eacef/eacef2.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/eacef/eacef3.png"/>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <LightBox path="/assets/eacef/eacef4.png"/>
                        </Col>
                    </Row>
                </Grid>

                <br/>
                <br/>
            </div>
        )
    }
}