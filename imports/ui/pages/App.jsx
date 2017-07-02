/**
 * Created by JohnBae on 4/11/17.
 */

import React, { Component }from 'react';
import { RouteTransition } from 'react-router-transition';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducers/projectSelection';


import '../style/main.css';
import '../style/fonts.css';
import '../style/containers.css';
import '../style/elements.css';

var store = createStore(reducer);

export default class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <div id = "masterContainer">
                    <RouteTransition
                        pathname={this.props.location.pathname}
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 1 }}
                        atActive={{ opacity: 1 }}
                        style={{transition: "opacity 5s"}}>
                        {this.props.children}
                    </RouteTransition>
                </div>
            </Provider>
        )
    }
}