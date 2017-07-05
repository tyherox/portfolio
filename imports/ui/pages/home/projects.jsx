/**
 * Created by JohnBae on 3/8/17.
 */

import React, { Component } from 'react';
import Item from '../../components/item/main.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as Actions from "../../../actions/projectSelection";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, FormGroup, Button, ResponsiveEmbed} from 'react-bootstrap';
import FlipMove from 'react-flip-move';


var key = 0;

class Projects extends Component {

    constructor(props){
        super(props);

        this.state = {filter: []}
    }

    render() {

        var empty = 0;
        var Projects = this.props.projects.map(function(elem){

            if(elem!="empty")
            return(
                <Col xs={12} md={6} key={elem.get("title")}>
                    <Item title={elem.get('title')}
                          image={elem.get('image')}
                          description={elem.get('description')}/>
                </Col>
            )
            else empty++
        });

        return (
            <Grid style = {{width: "auto"}}>
                <Row>
                    <FlipMove duration={250} easing="ease-out" enterAnimation="fade" leaveAnimation="fade">
                        {Projects}
                    </FlipMove>
                    {Projects.size==empty ? <p style={{textAlign: "center"}}>Sorry, no projects fit this criteria!</p> : ""}
                </Row>
            </Grid>
        );
    }
}

function selectorFactory(dispatch) {
    let result = {};
    const actions = bindActionCreators(Actions, dispatch);
    return (nextState, nextOwnProps) => {

        const nextResult = {
            projects: nextState.get("projects"),
            reduxActions: actions,
        };
        result = nextResult;
        return result
    }
}

export default connectAdvanced(selectorFactory)(Projects);