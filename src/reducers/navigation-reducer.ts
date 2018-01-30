import * as _ from 'lodash';
import { Action } from 'redux';
import * as Actions from '../actions/constants/navigation-action-constants';
import { handleAction, handleActions } from 'redux-actions';
import { getScreenHeight, getScreenWidth } from '../helpers';
import { SectionsEnum, SectionsEnumStr } from '../constants/navigation';

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

export default handleActions<NavigationStoreState, SectionsEnumStr>(
    {
        [Actions.SCROLLER_ITEM_CLICKED]: (state, action) => {
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
        [Actions.SCROLL]: (state, action) => {
            let screenHeight = getScreenHeight();
            let sectionNumber = Math.floor((window.pageYOffset + screenHeight / 2) / screenHeight);
            sectionNumber = sectionNumber > 5 ? 5 : sectionNumber;

            let shouldShowHeaders = sectionNumber !== SectionsEnum.WelcomeSection;

            if ((!state.showHeaders && shouldShowHeaders) || (state.showHeaders && !shouldShowHeaders)) {
                state.showHeaders = !state.showHeaders;
            }

            if (state.currentSection !== SectionsEnumStr[SectionsEnum[sectionNumber]]) {
                state.currentSection = SectionsEnumStr[SectionsEnum[sectionNumber]];
            }

            return Object.assign({}, state);
        }
    },
    initialState
);
