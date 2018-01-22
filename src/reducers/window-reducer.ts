import { handleAction, handleActions } from 'redux-actions';
import * as Actions from '../actions/constants/window-action-constants';
import { Action } from 'redux';

function screenHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function screenWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

declare type WindowStoreState = {
    screenHeight: number;
    screenWidth: number;
};

const initialState: WindowStoreState = {
    screenHeight: screenHeight(),
    screenWidth: screenWidth()
};

export default handleActions<WindowStoreState>(
    {
        [Actions.RESIZE]: (state, action) => {
            console.log('height: ', screenHeight());
            console.log('width: ', screenWidth());

            return Object.assign({}, state, {
                screenHeight: screenHeight(),
                screenWidth: screenWidth()
            });
        }
    },
    initialState
);
