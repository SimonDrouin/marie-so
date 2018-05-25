import { createAction } from 'redux-actions';
import * as ActionConstants from './constants/form-action-constants';

export const contactUsNameInputValueChanged = createAction<string>(ActionConstants.CONTACT_US_NAME_INPUT_CHANGED);
export const contactUsEmailInputValueChanged = createAction<string>(ActionConstants.CONTACT_US_EMAIL_INPUT_CHANGED);
export const contactUsSubjectInputValueChanged = createAction<string>(ActionConstants.CONTACT_US_SUBJECT_INPUT_CHANGED);
export const contactUsEmailContentInputValueChanged = createAction<string>(ActionConstants.CONTACT_US_EMAIL_CONTENT_INPUT_CHANGED);
