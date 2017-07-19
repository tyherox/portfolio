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
            Scribe is a <b>minimalist</b> yet <b>practical</b> writing application that enhances <b>focus</b>.
            It was written fully in Java and boasted features such as multiple themes, custom spellchecking,
            custom scrollbars, <b>sentence focus</b> and more.
        </p>

        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>June 2015</p>
        <h2 className="category-title">Final Product</h2>

        <br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/scribe/gallery1.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/scribe/gallery2.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/scribe/gallery3.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/scribe/gallery4.png"/>
                </Col>
            </Row>
        </Grid>
        <br/>

    </div>

var introduction =
    <div className="project-section">

        <h2 className="project-sectionTitle">Introduction: The Minimalist Movement</h2>

        <br/>

        <p>
            I happened to stumble upon the minimalist writing application genre while looking for a personal project to work on.
            These writing programs were <b>simple, minimalistic, and beautiful</b>. I immediately fell in love with them and went to work
            trying to create my own. The visual simplicity of these writing applications was deceiving to a young inexperienced programmer such as myself.
        </p>

        <br/>

    </div>;

var techOne =
    <div className="project-section">

        <h2 className="project-sectionTitle">GUI: Java Swing</h2>

        <br/>

        <p>
            As an avid Java programmer, I chose to work with Java Swing to easily create both Windows and Mac ports of my
            application. While it seemed to be easy at first, there were a lot of <b>problems</b> and <b>difficulty</b> in the cross platform
            and custom graphic aspects.

            <br/><br/>

            It was important for the application to have the same look and feel on both Mac and Windows version but the Java
            Swing cross platform feature provided very different graphics and behaviours to each version. Thus, I had to create
            a lot of custom graphics and dive into the Java Swing inner workings to get the look and feel I wanted.

        </p>

        <br/>

    </div>;

var techTwo =
    <div className="project-section">

        <h2 className="project-sectionTitle">Spell Checking and Recommendation</h2>

        <br/>

        <p>
            While most minimalist writing applications lacked spell check, I thought it was an essential component to
            any modern writing program. In addition, as I often make spelling mistakes, I wanted Scribe to offer recommendations
            to misspelled words.
        </p>

        <br/> <br/>

        <p style={{textAlign:"center", filter: "brightness(.95)"}}>
            <img style={{width: "100%", maxWidth: "350px"}}
                 src="/assets/scribe/scribeSpell.gif"/>
        </p>

        <br/>

        <p>
            A <b>hash table</b> was used to store the around 100,000 words and a thread constantly checked spelling of words against this table.
            For recommendations on misspelled words, a <b>levenshtein distance</b> calculation was done to determine the top three alternatives
            in the hash table. On a user right clicking on a misspelled word, Scribe would display these three recommendations to the user.
        </p>

        <br/>

    </div>;

var techThree =
    <div className="project-section">

        <h2 className="project-sectionTitle">Illustrations</h2>

        <br/>

        <p>
            There were a lot of designing elements to this project including the theme and custom element designs. I used
            illustrator to make the illustrations and even ended up creating a character called <b> Carrot </b> (you can
            see him on the top of the homepage) for a theme.

            <br/><br/>

            <p style={{textAlign:"center", filter: "brightness(.95)"}}>
                <img style={{width: "100%", maxWidth: "350px"}}
                     src="/assets/scribe/carrot.png"/>
                <p className="smallText">Say hi to Carrot!</p>
            </p>

            <br/>

            Here is a showcase for one of my themes done in Illustrator:

            <br/> <br/>

            <LightBox path="/assets/scribe/rainySkies.png"/>

        </p>

        <br/>

    </div>;

var conclusion =
    <div className="project-section">

        <h2 className="project-sectionTitle">Conclusion and Aftermath</h2>

        <br/>

        <p>
            Scribe was the project that gave me the <b>confidence</b> to program more seriously and create a software startup.
            Shortly after completing the first version of Scribe, I founded <b>Ryestory</b> with my friend <b>Andre Kim</b>. While
            we did a <b>Kickstarter</b> to help promote and develop the product further, we took it down early to
            create <a href="http://www.baework.com/project/smith">Smith</a> and <a href="http://www.baework.com/project/bard">Bard</a>.
        </p>

        <br/>

    </div>;

var content =
    <div key="1">

        <h1 className="sectionTitle-alt">Creating Scribe</h1>

        <br/> <br/>

        {introduction}

        {techOne}

        {techTwo}

        {techThree}

        {conclusion}

    </div>;


export default {
    title: "Scribe",
    skills: [SKILLS.JAVA, SKILLS.JAVA_SWING],
    image: "scribe/gallery4.png",
    description: "Minimalist Writing Application",
    about : about,
    githubLink : "https://github.com/tyherox/scribe",
    content: [content]
}