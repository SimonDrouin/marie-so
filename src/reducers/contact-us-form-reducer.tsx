import { handleAction, handleActions } from 'redux-actions';
import * as Actions from '../actions/constants/form-action-constants';
import { Action } from 'redux';


declare type ContactUsStoreState = {
    emailInputValue: string;
    nameInputValue: string;
    subjectInputValue: string;
    emailContentInputValue: string;
};

const initialState: ContactUsStoreState = {
    emailInputValue: '',
    nameInputValue: '',
    subjectInputValue: '',
    emailContentInputValue: ''
};

export default handleActions<ContactUsStoreState, string>(
    {
        [Actions.CONTACT_US_NAME_INPUT_CHANGED]: (state, action) => {
            return Object.assign({}, state, {
                nameInputValue: action.payload
            });
        },
        [Actions.CONTACT_US_EMAIL_INPUT_CHANGED]: (state, action) => {
            return Object.assign({}, state, {
                emailInputValue: action.payload
            });
        },
        [Actions.CONTACT_US_SUBJECT_INPUT_CHANGED]: (state, action) => {
            return Object.assign({}, state, {
                subjectInputValue: action.payload
            });
        },
        [Actions.CONTACT_US_EMAIL_CONTENT_INPUT_CHANGED]: (state, action) => {
            return Object.assign({}, state, {
                emailContentInputValue: action.payload
            });
        }
    },
    initialState
);
