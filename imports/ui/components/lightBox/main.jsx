/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label, Modal} from 'react-bootstrap';

export default class LighBox extends Component{

    constructor(props){
        super(props);

        this.state = {showModal: false};
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render(){
        return(
            <div>

                <ResponsiveEmbed a16by9 style={{border: "solid 2px lightGray"}}>
                    <embed src={this.props.path} onClick={this.open.bind(this)}/>
                </ResponsiveEmbed>

                <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
                    <img src={this.props.path} style={{width: "100%"}}/>
                </Modal>


            </div>
        )
    }
}