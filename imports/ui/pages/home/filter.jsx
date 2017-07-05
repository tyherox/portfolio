/**
 * Created by JohnBae on 3/8/17.
 */

import React, { Component } from 'react';
import * as Actions from "../../../actions/projectSelection";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';
import {Grid, Row, Col, FormGroup, Button, ResponsiveEmbed} from 'react-bootstrap';
import * as Skills from '../../../constants/skills';

class Filters extends Component {

    constructor(props){
        super(props);

        this.handleFilter = this.handleFilter.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    handleFilter(skill){
        console.log("Handling:", skill, this.props.activeFilters.toArray());

        if(this.props.activeFilters.includes(skill)){
            console.log("DOES HAVE!");
            this.props.reduxActions.removeFilter(skill);
        }
        else {
            console.log("DOESN'T HAVE!");
            this.props.reduxActions.addFilter(skill);
        }

    }

    clearFilter(){
        this.props.reduxActions.clearFilter()
    }

    render() {

        var SkillOptions = [],
            key = 0;

        for(let elem in Skills){
            elem = Skills[elem];
            var selected = this.props.activeFilters.includes(elem);

            SkillOptions.push(
                <Button onClick={()=>this.handleFilter(elem)}
                        className="emptyButton"
                        style={selected ? {transition: "all .5s", background: "#EA005E", color: "white"} :
                        {transition: "all .5s", background: "gray", color: "white"}}
                        key={key++}>
                    {elem}
                </Button>
            );
        }

        return (
            <div id="category">
                <FormGroup>

                    {this.props.activeFilters.size == 0 ?
                        <div>
                            <p className="descriptionText">Filters: </p>
                        </div>
                        :
                        <div>
                            <Button className="emptyButton category-clear"
                                    onClick={this.clearFilter}>Clear</Button>
                            <p style={{display: "inline"}} className="descriptionText">
                                Amount of filters: {this.props.activeFilters.size}
                            </p>
                        </div>}
                    {SkillOptions}

                </FormGroup>
            </div>
        );
    }
}

function selectorFactory(dispatch) {
    let result = {};
    const actions = bindActionCreators(Actions, dispatch);
    return (nextState, nextOwnProps) => {

        const nextResult = {
            activeFilters: nextState.get("activeFilters"),
            reduxActions: actions,
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Filters);