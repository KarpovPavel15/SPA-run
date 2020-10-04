import { combineReducers } from 'redux';
import { reducerAchievement } from '../modules/achievements-page';

export default combineReducers({
    userInfo: reducerAchievement
});
