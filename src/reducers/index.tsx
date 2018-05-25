import { combineReducers, Reducer } from 'redux';
import { SectionsEnum } from '../constants/navigation';
import navigation from './navigation-reducer';
import window from './window-reducer';
import contactUsForm from './contact-us-form-reducer';

export interface RootState {
    navigation: {
        currentSection: SectionsEnum;
        showHeaders: boolean;
    };
    window: {
        screenHeight: number;
        screenWidth: number;
    };
    contactUsForm: {
        emailInputValue: string;
        nameInputValue: string;
        subjectInputValue: string;
        emailContentInputValue: string;
    }
}

export default combineReducers<RootState>({ navigation, window, contactUsForm });
