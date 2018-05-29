import { createAction } from 'redux-actions';
import { SectionsEnumStr } from '../constants/navigation';
import * as NavigationActionConstants from './constants/navigation-action-constants';

export var NavigationActions = {
    scroll: createAction(NavigationActionConstants.SCROLL),
    scrollerItemClicked: createAction<SectionsEnumStr>(NavigationActionConstants.SCROLLER_ITEM_CLICKED),
    headerBurgerClicked: createAction(NavigationActionConstants.HEADER_BURGER_CLICKED)
}
