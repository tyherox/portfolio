/**
 * Created by JohnBae on 7/7/17.
 */
import * as SKILLS from "../skills";
import React from 'react';
import LightBox from '../../ui/components/lightBox/main';
import {Grid, Row, Col} from 'react-bootstrap';

let about =
    <div>
      <p>
        <a href="http://mandumstudio.herokuapp.com" target="_blank">Mandum</a> is a website studio I created to provide <b>bilingual websites</b> in Korea
        for a <b>fraction</b> of the price of Korean competitors. It was a short project I worked on with a friend before I started my job
        later at <a href="https://www.cubros.tv/" target="_blank">Cubros</a>. It was a very design and marketing focused project.
      </p>
        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>June 2017</p>
        <h2 className="category-title">Final Product</h2>

        <br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/mandum/gallery1.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/mandum/gallery2.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/mandum/gallery3.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/mandum/gallery4.png"/>
                </Col>
            </Row>
        </Grid>
        <br/>

    </div>

let introduction =
    <div className="project-section">

        <h2 className="project-sectionTitle">Introduction: Overpriced Websites</h2>

        <br/>

        <p>
            I discovered through my time helping my university build their website that Korean website studios charged
          as much as <b>2x</b> the price of a website for bilingual (English and Korean) websites. I reasoned that I could
          create a competitive studio by offering webistes with bilingual capacities for <b>free</b> and eventually charge as little
          as <b>20% of the total price</b> in the future.
            <br/><br/>
        </p>

        <br/>

    </div>;

let techOne =
    <div className="project-section">

        <h2 className="project-sectionTitle">The Price Chooser</h2>

        <br/>

        <p>
          I wanted to make using Mandum Studio a much <b>easier and pleasant</b> experience than using our competitors.
          Originally, our plan to really push ourselves ahead of competitors was the <b>online price chooser</b>.

          <br/><br/>

          <LightBox path="/assets/mandum/pricechooser.png"/>

          <br/><br/>

          It was meant to provide pricing <b>transparency and convenience</b> to customers who could <b>instantly</b> check what we would
          charge for a given website and submit an order. While it took the bulk of the development time and proved much more difficult than I expected, it was
          unfortunately <b>removed</b> shortly after completion due to <b>marketing reasons</b>.

        </p>

        <br/>

    </div>;

let techTwo =
    <div className="project-section">

        <h2 className="project-sectionTitle">The Design</h2>

        <br/>

        <p>
          I took a very long time deciding the design scheme of the website. While google's <b>material design</b> was initially
          considered, I opted for a <b>gradient</b> and <b>opacity</b> based design utilizing <b>irregular geometry</b>. Bright, lively colors
          were used to convey a sense of <b>energy and youth</b> but were carefully coordinated to
          instill a <b>pristine</b> atmosphere. It took some time and several design schemes to discover and utilize the irregular geometry design.
        </p>

        <br/> <br/>

      <LightBox path="/assets/mandum/design.png"/>

        <p>

        </p>

        <br/>

    </div>;

let conclusion =
    <div className="project-section">

        <h2 className="project-sectionTitle">Conclusion and Aftermath</h2>

        <br/>

        <p>
          Mandum was an extremely short project of around <b>two months</b> that had to
          unfortunately be paused due to my work. We never really got around to making money or even gathering clients. I look
          forward to <b>resuming</b> this project in the future and learned a lot about creating <b>my own UI design styles</b>.
        </p>

        <br/>

    </div>;

let content =
    <div key="1">

        <h1 className="sectionTitle-alt">Creating Mandum</h1>

        <br/> <br/>

        {introduction}

        {techOne}

        {techTwo}

        {conclusion}

    </div>;


export default {
    title: "Mandum",
    skills: [SKILLS.JAVASCRIPT, SKILLS.BOOTSTRAP, SKILLS.CSS, SKILLS.REDUX, SKILLS.REACT],
    image: "mandum/gallery1.png",
    description: "Website Studio",
    about : about,
    githubLink : "https://github.com/tyherox/mandum",
    content: [content]
}