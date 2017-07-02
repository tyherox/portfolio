/**
 * Created by JohnBae on 7/1/17.
 */

import * as types from '../constants/actionTypes';
import availProjects from '../constants/availProjects';
import {fromJS} from 'immutable';

const DEFAULT_STATE = fromJS({
    projects: availProjects,
    activeFilters: []
});

function destructiveIntersection(a, b)
{
    var result = [];
    while( a.length > 0 && b.length > 0 )
    {
        if      (a[0] < b[0] ){ a.shift(); }
        else if (a[0] > b[0] ){ b.shift(); }
        else /* they're equal */
        {
            result.push(a.shift());
            b.shift();
        }
    }

    return result;
}

function projectSelection(state = DEFAULT_STATE, action) {
    switch (action.type) {

        case types.ADD_FILTER:
            console.log(state);
            var newActiveFilters = state.get("activeFilters").push(action.payload);
            var newProjects = [];

            availProjects.forEach(function (elem) {
                var usedSkills = elem.get("skills");

                if(usedSkills.isSuperset(newActiveFilters)){
                    newProjects.push(elem);
                }
                else {
                    newProjects.push("empty");
                }
            });

            var newState = {projects: newProjects, activeFilters: newActiveFilters};

            return fromJS(newState);

        case types.CLEAR_FILTER:
            var newState = {projects: availProjects, activeFilters: []};
            return fromJS(newState);

        case types.REMOVE_FILTER:
            var newActiveFilters = state.get("activeFilters").delete(state.get("activeFilters").indexOf(action.payload));
            var newProjects = [];

            availProjects.forEach(function (elem) {
                var usedSkills = elem.get("skills");

                if(usedSkills.isSuperset(newActiveFilters)){
                    newProjects.push(elem);
                }
                else {
                    newProjects.push("empty");
                }
            });

            var newState = {projects: newProjects, activeFilters: newActiveFilters};

            return fromJS(newState);

        default:
            return state;
    }


}



export default projectSelection;
