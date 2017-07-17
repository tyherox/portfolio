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
            Smith was a <b>scripting language</b> I created to easily build
            <a href="https://en.wikipedia.org/wiki/Interactive_fiction" target="_blank"> interactive fiction</a> and
            interactive text games. It was created to be <b>easy</b> for non-programmers but offered interesting
            features like <b>timed</b> decisions, random <b>probability</b> in user's choices, <b>if statements</b>,
            and others to allow writers to create engaging novels.
        </p>
        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>November 2015</p>
        <h2 className="category-title">Final Product</h2>

        <br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/smith/smithDemo.gif"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/smith/gallery2.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/smith/gallery3.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/smith/gallery4.png"/>
                </Col>
            </Row>
        </Grid>
        <br/>

    </div>

var introduction =
    <div className="project-section">

        <h2 className="project-sectionTitle">Introduction: Interactive Fiction</h2>

        <br/>

        <p>
            I came across an interesting game during the Summer of 2015. <a href="https://www.choiceofgames.com/robots/" target="_blank">
            Choice of Robots</a> gripped me with an interesting plot, meaningful choices, and a simple interface. This interactive fiction
            game required players to simply select the path the story was to progress to impact the ending of a story.
            After browsing through the other <b>Choice of Games'</b> games, I thought I could make a more <b>dynamic</b>
            and <b>visual</b> platform that could open up a whole dimension of variables in interactive fiction games.
        </p>

        <br/>

    </div>;

var techOne =
    <div className="project-section">

        <h2 className="project-sectionTitle">The Script</h2>

        <br/>

        <p>
            I had very little training and knowledge in designing programming languages at the time but wanted to make sure
            the script was <b>plain</b> and <b>simple</b>. As I was targeting <b>authors</b> and not programmers, simplicity and a low
            learning curve was essential.

            <br/><br/>

            I took a lot of cues form <b>HTML</b>, which I knew was a widespread markup language people were familiar with. Most notably,
            these signs <b>{"< >"}</b> were used to denote Smith syntax. A short, preliminary documentation can be
            found <a href="https://docs.google.com/document/d/15foBvKS5pPCRLkw7K-ZsGDQgSZtqI1zi6_nBvgjLqmU/edit" target="_blank">here</a>
        </p>

        <br/>

    </div>;

var techTwo =
    <div className="project-section">

        <h2 className="project-sectionTitle">The Compiler</h2>

        <br/>

        <p>
            The compiler had a simple behavior:

            <br/><br/>

            <ol>
                <li> Read and store game file line into array elements.</li>
                <br/>
                <li> Initialize variables.</li>
                <br/>
                <li> Go to first or saved block <b>({"<b>"})</b> line of game file.</li>
                <br/>
                <li> Read out text and options. </li>
                <br/>
                <li> On a chosen option, find a block with the given destination and repeat. </li>
            </ol>

            <br/><br/>

            Building the compiler involved a lot of String functions to detect Smith syntax. Many String operations were
            done to determine the command of a line, to clean-up messy text, and determine a block's scope. The logic portion of the compiler
            was surprisingly difficult, especially regarding the <b>if statement</b> commands. A component I called the <b>operator stack</b> was
            used to determine the flow of if statements and other commands.
        </p>

        <br/>

    </div>;

var techThree =
    <div className="project-section">

        <h2 className="project-sectionTitle">Features</h2>

        <br/>

        <p>
            I believed Smith offered several features that made it a desirable alternative to popular engines like the choice script.

            <br/><br/>

            <ul>
                <li> <b>Timed Features:</b> Options are available for a certain amount of time</li>
                <br/>
                <li> <b>Image Loading:</b> The background image can be altered to set a mood</li>
                <br/>
                <li> <b>Randomness:</b> A random number generator can be used to add probability and randomness to the story progression</li>
            </ul>

        </p>

        <br/>

    </div>;

var conclusion =
    <div className="project-section">

        <h2 className="project-sectionTitle">Conclusion and Aftermath</h2>

        <br/>

        <p>
            Smith was a challenging project that forced me to deeply engage in <b>String operations and functions</b>. I enjoyed
            making the engine and watching a short game run with a scripting language I designed. Although I admit there
            is a lot of room for improvement, I found it to be a solid engine that I sometimes use to make short games for
            my friends.
        </p>

        <br/>

    </div>;

var content =
    <div key="1">

        <h1 className="sectionTitle-alt">Creating Smith</h1>

        <br/> <br/>

        {introduction}

        {techOne}

        {techTwo}

        {techThree}

        {conclusion}

    </div>;


export default {
    title: "Smith",
    skills: [SKILLS.JAVA, SKILLS.JAVA_SWING],
    image: "smith/gallery2.png",
    description: "Scripting Engine for Interactive Fiction",
    about : about,
    githubLink : "https://github.com/tyherox/smith",
    content: [content]
}