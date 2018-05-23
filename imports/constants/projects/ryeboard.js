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
            Ryeboard is a <b>virtual whiteboard for creative endeavors</b> currently being developed on my own. It allows users to
            work with various different widgets on a large board for brainstorming, organization, and more. A demo for the current
            build can be played around <a href="http://www.ryeboard.com/" target="_blank">here</a>.
        </p>
        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>ETA: August</p>
        <h2 className="category-title">Project in Progress</h2>

        <br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/ryeboard/gallery1.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/ryeboard/gallery2.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/ryeboard/gallery3.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/ryeboard/gallery4.png"/>
                </Col>
            </Row>
        </Grid>

        <br/>

    </div>


var content =
    <div key="1">
        <h1 className="sectionTitle-alt">Project in Progress</h1>
    </div>;


export default {
    title: "Ryeboard",
    skills: [SKILLS.HTML, SKILLS.CSS, SKILLS.JAVASCRIPT, SKILLS.METEOR_JS, SKILLS.AWS, SKILLS.MONGO_DB, SKILLS.REDUX],
    image: "ryeboard/gallery1.png",
    description: "Virtual Whiteboard",
    about : about,
    githubLink : "https://github.com/tyherox/ryeboard",
    content: [content]
}