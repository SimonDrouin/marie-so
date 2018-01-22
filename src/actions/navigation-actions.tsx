import { createAction } from 'redux-actions';
import { SectionsEnum } from '../constants/navigation';
import * as NavigationActionConstants from './constants/navigation-action-constants';

export const scrollToSection = createAction<SectionsEnum>(NavigationActionConstants.SCROLL_TO_SECTION);
export const headerBurgerClicked = createAction(NavigationActionConstants.HEADER_BURGER_CLICKED);
export const showHeaders = createAction(NavigationActionConstants.SHOW_HEADERS);
