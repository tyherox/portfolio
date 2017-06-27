/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label} from 'react-bootstrap';

export default class TestNavBar extends Component{

    render(){
        return(
            <div>
                <div className = "headerSection">
                    <h1>Bard</h1>
                    <h3>Integrated Development Environment (IDE) for Smith Interactive Fiction</h3>
                </div>

                <hr />

                <p>
                    Bard is the <b>IDE</b> I made to assist myself in creating the first <b>Smith game</b>.
                    <br/><br/>
                    It featured a scrolling minimap, syntax highlighting, direct executing of script from
                    the IDE and an inverse design. Bard was part of a <b>grand strategy</b> to create a community
                    around <a href="https://en.wikipedia.org/wiki/Interactive_fiction" target="_blank">
                    interactive fiction</a> along with <Link to="/project/smith">Smith</Link>.
                </p>

                <br/>
                    <Button style={{fontSize: "1.5rem"}}
                            href="https://github.com/tyherox/Rye-Bard"
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

                <h2 style={{marginBottom: "15px"}}>Skills and Tools</h2>
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
                                <embed src="/assets/bard/bard1.png" />
                            </ResponsiveEmbed>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                <embed src="/assets/bard/bard2.png" />
                            </ResponsiveEmbed>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                Forgot to save? Don’t worry, it’s all there.                            </ResponsiveEmbed>
                        </Col>
                        <Col xs={12} md={6} style={{marginBottom: "25px"}}>
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                                <embed src="/assets/bard/bard4.png" />
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