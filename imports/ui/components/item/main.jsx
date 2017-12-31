/**
 * Created by JohnBae on 6/30/17.
 */

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label} from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import './style.css';

export default class Item extends Component{

    constructor(props){
        super(props);

        this.state = {hover: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        browserHistory.push({
            pathname: "/project/"+this.props.title.toLowerCase(),
            state: {
                skills: this.props.skills
            }
        });
    }


    render(){
        return(
            <div className="itemContainer"
                 onMouseEnter={()=> this.setState({hover: true})}
                 onMouseLeave={()=> this.setState({hover: false})}
                 onClick={this.handleClick}>

                <LazyLoad placeholder={<Placeholder />} once>
                    <img style={{
                        width: "100%",
                        marginRight: "10px",
                        verticalAlign: "middle"
                    }}src={"/assets/" + this.props.image}/>
                </LazyLoad>
                <div className="itemContainer-description">
                    <p className="itemContainer-description-subTitle">{this.props.description}</p>
                    <b className="itemContainer-description-title" ref="title"
                       style={{borderBottom: this.state.hover ? "solid 2px dodgerblue" : "solid 2px transparent"}}>{this.props.title}</b>
                </div>
            </div>
        )
    }
}

class Placeholder extends React.Component{
    render(){
        console.log("WTF");
        return <div className='itemContainer-placeholder'>
            "TESTING
        </div>
    }
}