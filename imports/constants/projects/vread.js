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
            Vread is a <b>virtual reality platform</b> that allows creators to build virtual reality environments and games with ease created
          by <a href="https://www.cubros.tv/" target="_blank">Cubros</a>. I have developed the structure and basic 3D functionality but the project is still in it's alpha stages. As of the moment, I
          am working as the sole developer in the company.
        </p>
        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>ETA: September 2018</p>
        <h2 className="category-title">Final Product</h2>

        <br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/vread/gallery1.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/vread/gallery2.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/vread/gallery3.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/vread/gallery4.png"/>
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
    title: "Vread",
    skills: [SKILLS.JAVASCRIPT, SKILLS.CSS, SKILLS.REACT, SKILLS.REDUX, SKILLS.AFRAME, SKILLS.METEOR_JS, SKILLS.AWS],
    image: "vread/gallery1.png",
    description: "Virtual Reality Platform",
    about : about,
    githubLink : "https://github.com/cubros/vread",
    content: [content]
}