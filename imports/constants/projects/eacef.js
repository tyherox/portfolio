/**
 * Created by JohnBae on 7/7/17.
 */
import * as SKILLS from "../skills";
import React from 'react';
import LightBox from '../../ui/components/lightBox/main';
import {Grid, Row, Col} from 'react-bootstrap';

var about =
    <div>
        <p>
            This website was for a <b>professor</b> from Hanyang University who wanted a website done for
            an <b>international conference</b> as soon as possible. I heavily
            utilized <a href="https://weebly.com" target="_blank">Weebly</a> as the original criteria did not require a
            custom coded website. The design incorporates familiar <b>Korean web design</b> as requested by the client.
        </p>

        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>December 2016</p>
        <h2 className="category-title">Final Product</h2>

        <br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/eacef/gallery1.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/eacef/gallery2.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/eacef/gallery3.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/eacef/gallery4.png"/>
                </Col>
            </Row>
        </Grid>

        <br/>

    </div>

var introduction =
    <div className="project-section">

        <h2 className="project-sectionTitle">Introduction: First Client</h2>

        <br/>

        <p>

            A senior classmate recommended me to a professor to start this project. It was my <b>first paid</b> development
            project and I was very excited to work as a <b>freelancer</b>. During my first meeting with the professor, I was
            referred to the old conference website:

            <br/><br/>

            <LightBox path="/assets/eacef/oldEacef.png"/>

            <br/><br/>

            I was confident I could provide a more modern design to the website. I showed him a prototype I made before the
            meeting which I built with Weebly, a website builder. As he was pleased with the results and cared little for
            a custom built website, I decided to continue my development with Weebly.
        </p>

        <br/>

    </div>;

var design =
    <div  className="project-section">
        <h2 className="project-sectionTitle">Website Design</h2>

        <br/>

        <p>
            Unfortunately, I had very little say in the design aspects of this project. Although I preferred a clean, minimalistic
            design paradigm that incorporates material design, I had to <b>follow</b> the designs given to me through a powerpoint format.

        </p>

        <br/>
    </div>;

var techOne =
    <div className="project-section">

        <h2 className="project-sectionTitle">Custom Scripts</h2>

        <br/>

        <p>
            There were several features such as countdown timers and tables that were not provided by Weebly. As such,
            I used custom scripts to incorporate those features required by the client.
        </p>

        <br/>

    </div>;

var conclusion =
    <div className="project-section">

        <h2 className="project-sectionTitle">Conclusion and Aftermath</h2>

        <br/>

        <p>
            The EACEF project was an interesting experience that showed me what being a freelancer is like. It
            was <b>satisfying</b> to receive payment for my work but I couldn't help but feel <b>disappointed</b> by the lack of
            creative opportunities. But as the payment system was in charge of <b>tens of thousands of dollars</b> worth of
            transactions it was quiet fun to work on.
        </p>

        <br/>

    </div>;

var content =
    <div key="1">

        <h1 className="sectionTitle-alt">Creating EACEF</h1>

        <br/> <br/>

        {introduction}

        {design}

        {techOne}

        {conclusion}
    </div>;


export default {
    title: "EACEF",
    skills: [SKILLS.JAVASCRIPT, SKILLS.CSS, SKILLS.HTML, SKILLS.WEEBLY],
    image: "eacef/gallery1.png",
    description: "International Conference Website",
    about : about,
    homeLink : "http://www.eacef2017.com",
    content: [content]
}