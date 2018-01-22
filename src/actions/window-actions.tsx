import { createAction } from 'redux-actions';
import * as WindowActionConstants from './constants/window-action-constants';

export const resize = createAction(WindowActionConstants.RESIZE);
