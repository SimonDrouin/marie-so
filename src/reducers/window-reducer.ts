import { handleAction, handleActions } from 'redux-actions';
import * as Actions from '../actions/constants/window-action-constants';
import { Action } from 'redux';
import { getScreenHeight, getScreenWidth } from '../helpers';

declare type WindowStoreState = {
    screenHeight: number;
    screenWidth: number;
};

const initialState: WindowStoreState = {
    screenHeight: getScreenHeight(),
    screenWidth: getScreenWidth()
};

export default handleActions<WindowStoreState>(
    {
        [Actions.RESIZE]: (state, action) => {
            return Object.assign({}, state, {
                screenHeight: getScreenHeight(),
                screenWidth: getScreenWidth()
            });
        }
    },
    initialState
);
