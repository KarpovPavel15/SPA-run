import { actionCreator, requestCreator, successCreator } from '../../../utils';

export const setUserContent = 'SET_USER_CONTENT';
export const setUserContentRequestAction = actionCreator(requestCreator(setUserContent));
export const setUserContentSuccessAction = actionCreator(successCreator(setUserContent));
