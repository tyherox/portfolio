/**
 * Created by JohnBae on 7/1/17.
 */

import * as types from '../constants/actionTypes';
import availProjects from '../constants/projects/main';
import {fromJS} from 'immutable';

const DEFAULT_STATE = fromJS({
    projects: availProjects,
    activeFilters: []
});

function projectSelection(state = DEFAULT_STATE, action) {

    var newActiveFilters,
        newProjects,
        newState;

    switch (action.type) {

        case types.ADD_FILTER:

            newActiveFilters = state.get("activeFilters").push(action.payload);
            newProjects = [];

            availProjects.forEach(function (elem) {
                var usedSkills = elem.get("skills");

                if(usedSkills.isSuperset(newActiveFilters)){
                    newProjects.push(elem);
                }
                else {
                    newProjects.push("empty");
                }
            });

            newState = {projects: newProjects, activeFilters: newActiveFilters};

            return fromJS(newState);

        case types.CLEAR_FILTER:

            newState = {projects: availProjects, activeFilters: []};
            return fromJS(newState);

        case types.REMOVE_FILTER:

            newActiveFilters = state.get("activeFilters").delete(state.get("activeFilters").indexOf(action.payload));
            newProjects = [];

            availProjects.forEach(function (elem) {
                var usedSkills = elem.get("skills");

                if(usedSkills.isSuperset(newActiveFilters)){
                    newProjects.push(elem);
                }
                else {
                    newProjects.push("empty");
                }
            });

            newState = {projects: newProjects, activeFilters: newActiveFilters};

            return fromJS(newState);

        default:
            return state;
    }


}



export default projectSelection;
