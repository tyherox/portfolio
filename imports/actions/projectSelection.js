/**
 * Created by JohnBae on 7/1/17.
 */
import * as types from '../constants/actionTypes';

export const addFilter = (filter) =>{
    return {
        type: types.ADD_FILTER,
        payload: filter
    }
};

export const clearFilter = () =>{
    return {
        type: types.CLEAR_FILTER
    }
};


export const removeFilter = (filter) =>{
    return {
        type: types.REMOVE_FILTER,
        payload: filter
    }
};
