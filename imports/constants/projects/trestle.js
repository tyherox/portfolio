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
            Trestle is a <b>writing application</b> that allows users to <b>build</b> their own writing environment by
            moving and resizing <b>widgets</b>. It is the product of my startup team, Ryestory, where I was the lead
            developer and founder.
        </p>
        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>March 2017</p>
        <h2 className="category-title">Final Product</h2>

        <br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/trestle/gallery1.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/trestle/gallery2.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/trestle/gallery3.png"/>
                </Col>
                <Col xs={12} md={6} className="project-item-list">
                    <LightBox path="/assets/trestle/gallery4.png"/>
                </Col>
            </Row>
        </Grid>
        <br/>

    </div>

var introduction =
    <div className="project-section">

        <h2 className="project-sectionTitle">Introduction: Modular Writing</h2>

        <br/>

        <p>
            Writing is rarely a linear task. It involves revisiting previous areas, writing several versions, and
            referencing other materials. My team sought to create a word processor appropriate for this kind of writing.
            <br/><br/>
            We believed a "writing environment" where one could customize the layout of the application would be crucial
            in achieving this goal.
        </p>

        <br/>

    </div>;

var design =
    <div  className="project-section">
        <h2 className="project-sectionTitle">Application Design</h2>

        <br/>

        <p>
            Customization, usability, and minimalism were the essence of Trestle. To ensure these qualities would be present
            in Trestle, we spent a lot of time designing the application and even built several versions.

            <br/><br/>

            The development areas can be divided into three sections:
        </p>

        <br/><br/>

        <Grid style = {{width: "auto"}}>
            <Row className="show-grid">
                <Col xs={12} md={4} className="project-item-list">

                    <p style={{textAlign:"center", filter: "brightness(.95)"}}>
                        <img style={{height: "100px"}}
                             src="/assets/trestle/widget.png"/>

                    </p>

                    <p className="smallText">
                        Users utilize components called <b>widgets</b> to build their writing environment. These provide
                        contextual features.
                    </p>
                </Col>
                <Col xs={12} md={4} className="project-item-list">

                    <p style={{textAlign:"center", filter: "brightness(.95)"}}>
                        <img style={{height: "100px"}}
                             src="/assets/trestle/layout.gif"/>
                    </p>

                    <p className="smallText">
                        The <b>layout</b>  is divided into grids in which Widgets can be placed. The grid system enables
                        easy arrangement of widgets.
                    </p>
                </Col>
                <Col xs={12} md={4} className="project-item-list">

                    <p style={{textAlign:"center"}}>
                        <img style={{height: "100px", filter: "brightness(.95)"}}
                             src="/assets/trestle/menubar.gif"/>
                    </p>

                    <p className="smallText">
                        The persistent <b>top menu</b> and the conditional <b>side menu</b> provide global features.
                    </p>

                </Col>
            </Row>
        </Grid>

        <br/>

        <p>
            Users add, remove, resize, and drag widgets across the layout to build their writing program. This allows
            users to utilize the features they only need reducing clutter and helping users focus on their tasks. In addition,
            the easy creation of multiple writing areas help pursue <b>multi-tasking</b> and <b>modular</b> writing.
        </p>

        <br/>
    </div>;

var techOne =
    <div className="project-section">

        <h2 className="project-sectionTitle">GUI: DOM and React</h2>

        <br/>

        <p>
            The Node.js framework Electron and Javascript were chosen over my usual language, Java, for <b>graphic user interface (GUI)</b> reasons.
            While I had ample experience with using Swing and Java FX, it was obvious to me after a day or two of research
            that CSS and HTML would allow me to develop GUIs <b>faster</b> and more <b>easily</b>. However, I quickly ran into problems
            using HTML's <b>document object model (DOM)</b>.

            <br/><br/>

            <ol>
                <li>As more and more components were created, the <b>relationship</b> between components were hard to clarify.</li>
                <br/>
                <li>When data was updated, it was hard to tell which component should get <b>re-rendered</b></li>
            </ol>

            <br/>

            React solved this in a rather flexible manner as we could slowly adopt the library into our code.
            React's usage of <b>JSX</b> helped us with our first problem while their <b>reconciliation</b> features helped us with our second.
        </p>

        <br/>

    </div>;

var techTwo =
    <div className="project-section">

        <h2 className="project-sectionTitle">Drag and Resize: Interact JS</h2>

        <br/>

        <p>
            Trestle was one of the first projects I started to use <b>libraries</b> more aggressively with. While I enjoyed
            creating my own features (spell checking, editor minimap, etc) on my Java projects, I decided to use a library
            called <b>Interact JS</b> for the drag and resize functionality of widgets.

        </p>

        <br/> <br/>

        <p style={{textAlign:"center", filter: "brightness(.95)"}}>
            <img style={{height: "250px"}}
                 src="/assets/trestle/collision.gif"/>
            <p className="smallText">Early "Collision" drag test with Interact JS</p>
        </p>

        <p>
            While there were many useful features provided by Interact JS, small adjustments to the library had to be made
            to allow for <b>minimum</b> and <b>maximum</b> widget sizes, drag handling <b>permissions</b>, and <b>collision detections</b>.
        </p>

        <br/>

    </div>;

var techThree =
    <div className="project-section">

        <h2 className="project-sectionTitle">Data Flow: Redux and Immutable JS</h2>

        <br/>

        <p>
            One of the most challenging parts of designing Trestle was the <b>data flow</b>. As Trestle was designed to be customized
            with different widgets, each with its own data, the data flow was a crucial element to the functionality.
            For example, one widget changing its data might need to effect other widgets or a global setting change may
            need to alter multiple widget attributes.

            <br/><br/>

            Trestle uses the <b>Immutable JS and Redux</b> libraries to make data <b>predictable</b> and
            <b>streamline</b> the data flow. Redux allows components to update only when it needs to by subscribing to data <b>stores</b>.
            Using this feature optimized the performance tremendously. On the other hand, Immutable JS made data reliable and maintainable.
            It made my development much easier as it was easier to track changes in data across different components. In addition,
            it made reconciliation more effective as Immutable JS was very fast in detecting differences between data.
        </p>

        <br/>

    </div>;

var conclusion =
    <div className="project-section">

        <h2 className="project-sectionTitle">Conclusion and Aftermath</h2>

        <br/>

        <p>
           Trestle was the first time I built software with a team. It was also a chance for me to mature as a developer -
            utilizing build systems like Gulp, learning the importance of code clarity and quality, and actively using
            libraries instead of building from scratch. I plan on updating Trestle regularly in the future, outfitting it with
            cloud support, auto-update features, and eventually different types of widgets.
        </p>

        <br/>

    </div>;

var content =
    <div key="1">

        <h1 className="sectionTitle-alt">Creating Trestle</h1>

        <br/> <br/>

        {introduction}

        {design}

        {techOne}

        {techTwo}

        {techThree}

        {conclusion}

    </div>;


export default {
    title: "Trestle",
    skills: [SKILLS.CSS, SKILLS.DRAFT_JS, SKILLS.ELECTRON, SKILLS.GULP, SKILLS.IMMUTABLE_JS, SKILLS.INTERACT_JS,
        SKILLS.JAVASCRIPT, SKILLS.NODE_JS, SKILLS.REACT, SKILLS.REDUX],
    image: "trestle/gallery3.png",
    description: "Customizable Writing Application",
    about : about,
    githubLink : "https://github.com/tyherox/trestle",
    homeLink : "http://www.ryestory.com/home",
    content: [content]
}