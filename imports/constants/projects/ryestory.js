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
            Ryestory was a <b>startup</b> I founded with a friend a year ago. This was the website I created
            to promote <a href="http://www.baework.com/project/trestle">Trestle</a>. I utilized a brand new
            library called <b>Meteor JS</b> that allowed for quick and <b>easy prototyping</b>.
        </p>
        <br/>

        <hr/>

        <br/>

        <p className="itemContainer-description-subTitle" style={{color: "lightGray"}}>March 2017</p>
        <h2 className="category-title">Final Product</h2>

        <br/>

        <img style={{width: "100%"}}
             src="/assets/ryestory/demo.gif"/>

        <br/>

    </div>

var introduction =
    <div className="project-section">

        <h2 className="project-sectionTitle">Introduction: A Minimalist Website</h2>

        <br/>

        <p>

            In Korea, I often run into websites like this:

            <br/><br/>

            <LightBox path="/assets/ryestory/koreanWebsite.jpg"/>

            <br/><br/>

            This frustrates me at times since the clustered, confusing UI makes me want to leave the website - regardless of the value it offers.
            After my own experience with creating a "Korean style" <a href="http://eacef2017.hanyang.ac.kr/">website</a>, I
            wanted to make sure the website for Trestle was simple, minimalistic, and easy to navigate.
            None of this confusing, clustered design!

        </p>

        <br/>

    </div>;

var design =
    <div  className="project-section">
        <h2 className="project-sectionTitle">Layout Design</h2>

        <br/>

        <p>
            A <b>single-page</b> website paradigm was used to reduce cognitive overload and stay true to the spirit of
            <b>minimalism</b> and <b>usability</b>.Prototype designs were done using Adobe XD.

            <br/><br/>

            <LightBox path="/assets/ryestory/ryestory-prototypes.png"/>

            <br/><br/>

        </p>

        <br/>
    </div>;

var techOne =
    <div className="project-section">

        <h2 className="project-sectionTitle">Responsive Design: Bootstrap</h2>

        <br/>

        <p>
            Although Trestle can only be used on a computer, I still had to anticipate <b>mobile visitors</b> on the website.
            To solve this problem, I utilized <b>Bootstrap's grid system</b>. However, I also used a library
            called <b>React-Boostrap</b> to maintain a React oriented development environment.
        </p>

        <br/>

    </div>;

var techTwo =
    <div className="project-section">

        <h2 className="project-sectionTitle">Full-Stack Framework: Meteor</h2>

        <br/>

        <p>
            Meteor is a full-stack framework that allows developers to program an entire website using <b>Javascript syntax</b>.
            It utilizes the Node.js library to run the backend side of websites while using <b>Mongo DB</b> as the default database.
            It also includes many libraries such as one for account systems that allows for quick prototyping.

            <br/><br/>

            I decided to use Meteor because of the <b>quick prototyping</b> aspect and it's usage of <b>Javascript syntax</b>. As I was originally
            working with a team that mostly used Javascript, it was a big boon to have a framework exclusively use Javascript.
        </p>

        <br/>

    </div>;

var conclusion =
    <div className="project-section">

        <h2 className="project-sectionTitle">Conclusion and Aftermath</h2>

        <br/>

        <p>
            Ryestory was the first website I built using Meteor. It was an interesting experience that lead me to use
            Meteor for future <a href="baework.com/project/revomake">projects</a>. I have since furthered my venture into web development by looking into stand alone
            libraries like <b>Feather JS</b>.
        </p>

        <br/>

    </div>;

var content =
    <div key="1">

        <h1 className="sectionTitle-alt">Creating Ryestory</h1>

        <br/> <br/>

        {introduction}

        {design}

        {techOne}

        {techTwo}

        {conclusion}
    </div>;


export default {
    title: "Ryestory",
    skills: [SKILLS.BOOTSTRAP, SKILLS.CSS, SKILLS.JAVASCRIPT, SKILLS.METEOR_JS],
    image: "ryestory/gallery1.png",
    description: "Website for my startup, Ryestory",
    about : about,
    githubLink : "https://github.com/tyherox/ryestorywebsite",
    homeLink : "http://www.ryestory.com/home",
    content: [content]
}