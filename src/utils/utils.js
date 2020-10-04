export const actionCreator = type => (payload = {}) => ({
    type,
    ...payload
});

const actionTypeCreator = (actionStatus, actionType) => `${actionType}_${actionStatus}`;

export const requestCreator = actionType => actionTypeCreator('REQUEST', actionType);
export const successCreator = actionType => actionTypeCreator('SUCCESS', actionType);
