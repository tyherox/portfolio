/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router';
import LightBox from '../../components/lightBox/main';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label} from 'react-bootstrap';

export default class Bard extends Component{

    render(){
        return(
            <div>
                <div className = "headerSection">
                    <h1>Bard</h1>
                    <h3>Integrated Development Environment (IDE) for Smith Interactive Fiction</h3>
                </div>

                <br/>

                <div className="project-section">

                    <h2 className="category-title">About</h2>

                    <br/>

                    <p>
                        Bard is the <b>IDE</b> I made to assist myself in creating the first <b>Smith game</b>.
                        <br/><br/>
                        It featured a scrolling minimap, syntax highlighting, direct executing of script from
                        the IDE and an inverse design. Bard was part of a <b>grand strategy</b> to create a community
                        around <a href="https://en.wikipedia.org/wiki/Interactive_fiction" target="_blank">
                        interactive fiction</a> with <Link to="/project/smith">Smith</Link>.
                    </p>

                    <br/>

                    <Button href="https://github.com/tyherox/Rye-Bard"
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

                    <h2 className="category-title">Skills</h2>

                    <br/>

                    <div style={{width: "auto"}}>
                        <Label>Java</Label>&nbsp;
                        <Label>Java Swing</Label>&nbsp;
                        <Label>Foolishly custom coded everything...</Label>
                    </div>

                    <br/>

                </div>

                <div className="project-section">

                    <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>February 2016</p>

                    <h2 className="category-title">Final Product</h2>

                    <Grid style = {{width: "auto"}}>
                        <Row className="show-grid">
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/bard/bard1.png"/>
                            </Col>
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/bard/bard2.png"/>
                            </Col>
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/bard/bard3.png"/>
                            </Col>
                            <Col xs={12} md={6} className="project-item-list">
                                <LightBox path="/assets/bard/bard4.png"/>
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