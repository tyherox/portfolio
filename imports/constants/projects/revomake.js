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
            Revomake is a <b>3D printing file sharing service</b> currently being developed
            with <a href="http://www.jinliminteractive.com/" target="_blank">Sungjin Lim</a>. It allows for designers to upload and
            sell their designs through <b>customizable stores</b>. It is estimated to be completed sometime this year.
        </p>
        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>ETA: 3 months</p>
        <h2 className="category-title">Project in Progress</h2>

        <br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/revomake/gallery1.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/revomake/gallery2.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/revomake/gallery3.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/revomake/gallery4.png"/>
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
    title: "Revomake",
    skills: [SKILLS.BOOTSTRAP, SKILLS.HTML, SKILLS.CSS, SKILLS.JAVASCRIPT, SKILLS.METEOR_JS, SKILLS.AWS_S3,SKILLS.MONGO_DB],
    image: "revomake/gallery1.png",
    description: "3D Printing File Sharing",
    about : about,
    githubLink : "https://github.com/tyherox/revomake",
    content: [content]
}