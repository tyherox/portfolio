/**
 * Created by JohnBae on 7/1/17.
 */

import {fromJS} from 'immutable';
import * as SKILLS from "./skills";

var example = fromJS({})

export default projects = fromJS([
    {
        title: "Trestle",
        skills: [SKILLS.CSS, SKILLS.DRAFT_JS, SKILLS.ELECTRON, SKILLS.GULP, SKILLS.IMMUTABLE_JS, SKILLS.INTERACT_JS,
            SKILLS.JAVASCRIPT, SKILLS.NODE_JS, SKILLS.REACT, SKILLS.REDUX],
        image: "trestle/gallery3.png",
        description: "Customizable Writing Application"
    },
    {
        title: "Bard",
        skills: [SKILLS.JAVA, SKILLS.JAVA_SWING],
        image: "bard/bard1.png",
        description: "IDE for Smith Interactive Fiction Engine"
    },
    {
        title: "Smith",
        skills: [SKILLS.JAVA, SKILLS.JAVA_SWING],
        image: "smith/smith2.png",
        description: "Scripting Engine for Interactive Fiction"
    },
    {
        title: "EACEF",
        skills: [SKILLS.CSS, SKILLS.HTML, SKILLS.JAVASCRIPT, SKILLS.WEEBLY],
        image: "eacef/eacef2.png",
        description: "Hanyang University Website"
    },
    {
        title: "Ryestory",
        skills: [SKILLS.BOOTSTRAP, SKILLS.CSS, SKILLS.JAVASCRIPT, SKILLS.METEOR_JS, SKILLS.MONGO_DB],
        image: "ryestory/ryestory3.png",
        description: "Website for my startup, Ryestory"
    },
    {
        title: "Scribe",
        skills: [SKILLS.JAVA, SKILLS.JAVA_SWING],
        image: "scribe/scribe4.png",
        description: "Minimalist Writing Application"
    },
    {
        title: "Keystroke Biometrics",
        skills: [SKILLS.R],
        image: "keystroke/keystroke1.png",
        description: "Keystroke Biometric Algorithm"
    }
]);
