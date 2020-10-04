const initialState = {
    isUserAuth: false,
    userRoutes: [],

};
export const reducerAchievement = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_CONTENT_SUCCESS':
            return {
                ...state,
                isUserAuth: [...action.isUserAuth],
                userRoutes: [...action.userRoutes],
            };
        default:
            return state;
    }
};
