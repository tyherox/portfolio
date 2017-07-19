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
            Bard is an <b>IDE</b> (Integrated Development Environment) for
            the <a href="http://baework.com/project/smith">Smith</a> <a href="https://en.wikipedia.org/wiki/Interactive_fiction" target="_blank">
            interactive fiction</a> programming language I created. It features a scrolling minimap, syntax coloring, direct executing of script from
            the IDE, and an inverse design theme. It was part of a strategy to get new authors into using Smith to create
            stories.
        </p>
        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>December 2015</p>
        <h2 className="category-title">Final Product</h2>

        <br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/bard/gallery1.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/bard/gallery2.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/bard/gallery3.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/bard/gallery4.png"/>
                </Col>
            </Row>
        </Grid>
        <br/>

    </div>

var introduction =
    <div className="project-section">

        <h2 className="project-sectionTitle">Introduction: Building an Environment</h2>

        <br/>

        <p>
            The authors in our team originally wrote their Smith script in <b>Microsoft Excel</b> and <b>Google Sheets</b>.

            <br/><br/>

            <LightBox path="/assets/bard/earlyThatcher.png"/>

            <br/><br/>

            It was <b>not</b> a pleasant experience. The stories often lead to complex, branching story lines that
            became <b>exponentially</b> harder to maintain as the stories became longer. Thus, Bard was built
            to <b>help</b> my team build Smith games as well as <b>encourage</b> other authors to use Smith to write their novels.

            <br/><br/>
        </p>

        <br/>

    </div>;

var techOne =
    <div className="project-section">

        <h2 className="project-sectionTitle">GUI: Java Swing</h2>

        <br/>

        <p>
            The Java Swing library was a library I used extensively during my previous projects. Thus, I utilized
            the library during the development of Bard to create a <b>cross platform</b> GUI Application. However, I found the library
            to lack support in things like animation (I had to create my own) and had <b>strange behaviours</b> on different platforms. For example, the Mac
            version of Bard had a <b>staggered</b> scrolling behaviour that would have annoyed users of the Mac platform.

            <br/><br/>

            In addition, I did not like how the different platforms had very different interfaces. For example:

        </p>

        <br/><br/>

        <p style={{textAlign:"center", filter: "brightness(.95)"}}>
            <img style={{width: "100%", maxWidth: "350px"}}
                 src="/assets/bard/crossplatformJava.jpg"/>
            <p className="smallText">Differences in handling multiple tabs</p>
        </p>

        <p>
            Thus, I used a lot of <b>custom graphical assets</b> (scrollbars, buttons, etc) to override many of the cross platform
            graphical assets. This proved to be extremely tedious and rendered the cross platform feature of Swing useless.
        </p>

        <br/>

    </div>;

var techTwo =
    <div className="project-section">

        <h2 className="project-sectionTitle">The Editor</h2>

        <br/>

        <p>
            The editor was a challenging portion of the project. I utilized the <b>JTextPane</b> as the base model for the editor
            but did a lot of custom coding in the <b>DefaultStyledDocument</b> module as well as overwriting a lot of <b>paintComponent</b> methods.
            I also designed a String processor to process and coloring Smith syntax as well as
            block scopes.
        </p>

        <br/> <br/>

        <p style={{textAlign:"center", filter: "brightness(.95)"}}>
            <img style={{width: "100%", maxWidth: "350px"}}
                 src="/assets/bard/bardDemo.gif"/>
            <p className="smallText">Block scope and syntax coloring</p>
        </p>

        <p>
            I utilized <b>threads</b> to perform expensive and repetitive computing tasks which helped a lot with performance.
            A redo and undo system was added as well to help with editing tasks.
        </p>

        <br/>

    </div>;

var techThree =
    <div className="project-section">

        <h2 className="project-sectionTitle">Minimap</h2>

        <br/>

        <p>
            The minimap was a feature I enjoyed using in Sublime Text. When scrolling through big documents, it helped
            with <b>navigation</b> tremendously. I was disappointed to find no Java Swing library for scrolling minimaps so I built my own.
            It was a surprisingly <b>difficult</b> task that involved these steps:

            <br/><br/>

            <ol>
                <li>Find <b>height</b> of viewport.</li>
                <br/>
                <li>Create <b>bottom image</b> that ranges from the top of the current viewport minus the height of the viewport</li>
                <br/>
                <li>Create <b>top image</b> that ranges from the bottom of the current viewport plus the height of the viewport</li>
                <br/>
                <li>Create a <b>current image</b> that captures the current viewport graphics</li>
                <br/>
                <li>Stitch images together and display them on <b>minimap component</b></li>
                <br/>
                <li>Listen for scrolling or typing action.</li>
                <br/>
                <li>Update if text change or if scrolling goes beyond <b>current image</b> range</li>
            </ol>

            <br/><br/>

            It was a very expensive computational event that started lagging a lot after the <b>25000 word</b> mark. However, I
            optimized it to the best of my ability using <b>image compression</b> and <b>threading</b>.
        </p>

        <br/>

    </div>;

var conclusion =
    <div className="project-section">

        <h2 className="project-sectionTitle">Conclusion and Aftermath</h2>

        <br/>

        <p>
            Bard was a short project I worked on for about two months that involved a lot of <b>custom Java module coding</b>.
            I enjoyed studying the inner workings of the paintComponent method and the JTextPane module. While the project
            was not a commercial success, I learned a lot about Java and <b>performance optimization</b> on this project.
        </p>

        <br/>

    </div>;

var content =
    <div key="1">

        <h1 className="sectionTitle-alt">Creating Bard</h1>

        <br/> <br/>

        {introduction}

        {techOne}

        {techTwo}

        {techThree}

        {conclusion}

    </div>;


export default {
    title: "Bard",
    skills: [SKILLS.JAVA, SKILLS.JAVA_SWING],
    image: "bard/gallery1.png",
    description: "IDE for Smith",
    about : about,
    githubLink : "https://github.com/tyherox/bard",
    content: [content]
}