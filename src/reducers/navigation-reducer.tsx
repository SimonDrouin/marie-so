import * as _ from 'lodash';
import * as Actions from '../actions/constants/navigation-action-constants';
import { handleActions } from 'redux-actions';
import { SectionsEnumStr } from '../constants/navigation';

declare type NavigationStoreState = {
    currentSection: SectionsEnumStr;
    menuIsOpen: boolean;
    showHeaders: boolean;
};

const initialState: NavigationStoreState = {
    currentSection: SectionsEnumStr.WelcomeSection,
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

            let section = _.reduce(
                _.keys(SectionsEnumStr),
                (currentSectionId, sectionId) => {
                    const currentSection_Y = document.getElementById(currentSectionId).getBoundingClientRect().top;
                    const y = document.getElementById(sectionId).getBoundingClientRect().top;

                    return Math.abs(y) < Math.abs(currentSection_Y) ? sectionId : currentSectionId;
                },
                SectionsEnumStr.WelcomeSection
            );

            let shouldShowHeaders = section !== SectionsEnumStr.WelcomeSection;
            if ((!state.showHeaders && shouldShowHeaders) || (state.showHeaders && !shouldShowHeaders)) {
                state.showHeaders = !state.showHeaders;
            }

            if (state.currentSection !== section) {
                state.currentSection = section;
            }

            return Object.assign({}, state);
        }
    },
    initialState
);
