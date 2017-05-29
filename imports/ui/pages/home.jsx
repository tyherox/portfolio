/**
 * Created by JohnBae on 3/8/17.
 */

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {Grid, Row, Col, FormGroup, Button, ResponsiveEmbed} from 'react-bootstrap';

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <div className = "headerSection">
                    <h1>Hi, I'm John!</h1>
                    <h3>Full-stack developer and UI/UX geek</h3>
                </div>

                <hr />

                <p>
                    I’m a programmer working mostly with <b>Java</b>, <b>Javascript</b>, and <b>R</b> and
                    strive for <b>simplicity</b> and <b>usability</b> in UI/UX design.
                    <br/><br/>
                    Oh, and I'm a huge fan of <b>video games</b>, <b>The Lord of the Rings</b>, and <b>Star Wars</b>.
                </p>

                <br/>
                <br/>

                <hr />

                <div>
                    <div className="categoryTitle">
                        <h2 style={{marginBottom: "15px"}}>Here's what I worked on...</h2>
                        <FormGroup style={{ display: "none"}}>
                            <Button>
                                Bootstrap
                            </Button>
                            <Button>
                                CSS
                            </Button>
                            <Button>
                                Java
                            </Button>
                            <Button>
                                Javascript
                            </Button>
                            <Button>
                                Meteor JS
                            </Button>
                            <Button>
                                Node JS
                            </Button>
                            <Button>
                                R
                            </Button>
                            <Button>
                                React
                            </Button>
                            <Button>
                                Redux
                            </Button>
                        </FormGroup>
                    </div>
                    <Grid style = {{width: "auto"}}>
                        <Row className="show-grid">
                            <Col xs={6} md={4}>
                                <Item title="Trestle"
                                      image="trestle/trestle3.png"
                                      description="Customizable Writing Application"/>
                            </Col>
                            <Col xs={6} md={4}>
                                <Item title="Bard"
                                      image="bard/bard1.png"
                                      description="IDE for Smith Interactive Fiction Engine"/>
                            </Col>
                            <Col xs={6} md={4}>
                                <Item title="Smith"
                                      image="smith/smith2.png"
                                      description="Scripting Engine for Interactive Fiction"/>
                            </Col>
                            <Col xs={6} md={4}>
                                <Item title="EACEF"
                                      image="eacef/eacef2.png"
                                      description="Hanyang University Conference Website"/>
                            </Col>
                            <Col xs={6} md={4}>
                                <Item title="Ryestory"
                                      image="ryestory/ryestory3.png"
                                      description="Website for my startup, Ryestory"/>
                            </Col>
                            <Col xs={6} md={4}>
                                <Item title="Scribe"
                                      image="scribe/scribe4.png"
                                      description="Minimalist Writing Application"/>
                            </Col>
                            <Col xs={6} md={4}>
                                <Item title="Keystroke Biometrics"
                                      image="trestle/trestle3.png"
                                      description="Keystroke Biometric Algorithm"/>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <h2>A little bit more about me...</h2>
                <p>I am a genuine lover of interesting problems and programming. If you have a problem you're having
                a hard time with, I can get on it and will not stop until it is solved. In addition, as you can probably
                tell by the website, I love practicality and minimalism in design. Hate bloated UIs!</p>

                <br/>
                <br/>

                <h2>So, wanna build something cool together?</h2>
                <Button
                    block
                    bsStyle="primary"
                    bsSize="large"
                    href="mailto:silverbae@gmail.com">Heck yea!</Button>

                <br/>
                <br/>

                <br/>
                <br/>

            </div>
        );
    }
}

class Item extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="itemContainer">
                <p className="itemContainer-title" ref="title">{this.props.title}</p>
                <p className="itemContainer-description">{this.props.description}</p>
                <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                    <embed src={"/assets/"+this.props.image} />
                </ResponsiveEmbed>
                <Button bsSize="small"
                        onClick={()=>browserHistory.push("/project/"+this.props.title.toLowerCase())}
                        className="itemContainer-link"
                        ref="link">See More</Button>
            </div>
        )
    }
}