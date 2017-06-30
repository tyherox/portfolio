/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label} from 'react-bootstrap';

export default class TestNavBar extends Component{

    render(){
        return(
            <div>
                <div className = "headerSection">
                    <h1>Scribe</h1>
                    <h3>Minimalist Writing App Written in Java</h3>
                </div>

                <hr />

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
                <br/>

                <h2 style={{marginBottom: "15px"}}>Skills</h2>
                <div style={{width: "auto"}}>
                    <Label>Java</Label>&nbsp;
                    <Label>Java Swing</Label>&nbsp;
                    <Label>Foolishly custom coded everything...</Label>
                </div>

                <br/>
                <br/>

                <hr />

                <h2 style={{marginBottom: "15px"}}>Screenshots</h2>
                <Grid style = {{width: "auto"}}>
                    <Row className="show-grid">
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                <embed src="/assets/scribe/scribe1.png" />
                            </ResponsiveEmbed>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                <embed src="/assets/scribe/scribe2.png" />
                            </ResponsiveEmbed>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                <embed src="/assets/scribe/scribe3.png" />
                            </ResponsiveEmbed>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                <embed src="/assets/scribe/scribe4.png" />
                            </ResponsiveEmbed>
                        </Col>
                    </Row>
                </Grid>

                <br/>
                <br/>

                <Button block
                        bsStyle="primary"
                        onClick={()=>browserHistory.push("/home")}
                        bsSize="large">Go Back</Button>

                <br/>
                <br/>

                <br/>
                <br/>
            </div>
        )
    }
}