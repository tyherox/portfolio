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
                    <h1>Smith</h1>
                    <h3>Interactive Fiction Scripting Language</h3>
                </div>

                <hr />

                <p>
                    Smith was a <b>scripting language</b> I created to easily build
                    <a href="https://en.wikipedia.org/wiki/Interactive_fiction" target="_blank"> interactive fiction</a> and
                    interactive text games.
                    <br/> <br/>
                    It was created to be <b>easy</b> for non-programmers but offered interesting features like <b>timed</b> decisions,
                    random <b>probability</b> in user's choices, <b>if statements</b>, and others to allow writers to create
                    engaging novels. The first novel to be released will be <b>Thatcher</b> which is still in the works.
                    It featured an online registration and transaction system.
                </p>

                <br/>
                    <Button href="https://github.com/tyherox/smith"
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
                                <embed src="/assets/smith/smith1.png" />
                            </ResponsiveEmbed>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                <embed src="/assets/smith/smith2.png" />
                            </ResponsiveEmbed>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                <embed src="/assets/smith/smith3.png" />
                            </ResponsiveEmbed>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                <embed src="/assets/smith/smith4.png" />
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