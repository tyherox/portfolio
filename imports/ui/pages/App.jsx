/**
 * Created by JohnBae on 4/11/17.
 */

import React, { Component }from 'react';
import { RouteTransition } from 'react-router-transition';

import '../style/main.css';

export default class App extends Component {

    render() {

        return (
            <div id = "masterContainer">
                <RouteTransition
                    pathname={this.props.location.pathname}
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 1 }}
                    atActive={{ opacity: 1 }}>
                    {this.props.children}
                </RouteTransition>
             </div>
        )
    }
}