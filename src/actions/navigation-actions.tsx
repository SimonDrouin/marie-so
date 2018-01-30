import { createAction } from 'redux-actions';
import { SectionsEnumStr } from '../constants/navigation';
import * as NavigationActionConstants from './constants/navigation-action-constants';

export const scroll = createAction(NavigationActionConstants.SCROLL);
export const scrollerItemClicked = createAction<SectionsEnumStr>(NavigationActionConstants.SCROLLER_ITEM_CLICKED);
export const headerBurgerClicked = createAction(NavigationActionConstants.HEADER_BURGER_CLICKED);
