import { createAction } from 'redux-actions';
import * as WindowActionConstants from './constants/window-action-constants';


export var WindowActions = {
    resize: createAction(WindowActionConstants.RESIZE)
}
