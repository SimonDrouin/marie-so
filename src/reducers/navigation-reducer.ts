import { handleAction, handleActions } from 'redux-actions';
import * as Actions from '../actions/constants/navigation-action-constants';
import { SectionsEnum } from '../constants/navigation';
import { Action } from 'redux';

declare type NavigationStoreState = {
    currentSection: SectionsEnum;
    menuIsOpen: boolean;
    showHeaders: boolean;
};

const initialState: NavigationStoreState = {
    currentSection: SectionsEnum.WelcomeSection,
    menuIsOpen: false,
    showHeaders: false
};

export default handleActions<NavigationStoreState, SectionsEnum>(
    {
        [Actions.SCROLL_TO_SECTION]: (state, action) => {
            document.getElementById(action.payload).scrollIntoView();

            return Object.assign({}, state, {
                currentSection: action.payload
            });
        },
        [Actions.HEADER_BURGER_CLICKED]: (state, action) => {
            return Object.assign({}, state, {
                menuIsOpen: !state.menuIsOpen
            });
        },
        [Actions.SHOW_HEADERS]: (state, action) => {
            return Object.assign({}, state, {
                showHeaders: !state.showHeaders
            });
        }
    },
    initialState
);
