import { combineReducers, Reducer } from 'redux';
import { SectionsEnum } from '../constants/navigation';
import navigation from './navigation-reducer';
import window from './window-reducer';

export interface RootState {
    navigation: {
        currentSection: SectionsEnum;
        showHeaders: boolean;
    };
    window: {
        screenHeight: number;
        screenWidth: number;
    };
}

export default combineReducers<RootState>({ navigation, window });
