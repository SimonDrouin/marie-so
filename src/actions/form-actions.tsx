import { createAction } from 'redux-actions';
import * as ActionConstants from './constants/form-action-constants';


export var FormActions = {
    contactUsNameInputValueChanged: createAction<string>(ActionConstants.CONTACT_US_NAME_INPUT_CHANGED),
    contactUsEmailInputValueChanged: createAction<string>(ActionConstants.CONTACT_US_EMAIL_INPUT_CHANGED),
    contactUsSubjectInputValueChanged: createAction<string>(ActionConstants.CONTACT_US_SUBJECT_INPUT_CHANGED),
    contactUsEmailContentInputValueChanged: createAction<string>(ActionConstants.CONTACT_US_EMAIL_CONTENT_INPUT_CHANGED),
}
