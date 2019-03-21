const initialState = {
    navigationTabsList: []
};

export default function systemNavigationTabsReducer (state = initialState, action) {
    switch (action.type) {
    case "UPDATE_NAVIGATION_TABS_LIST":
        return {
            ...state,
            navigationTabsList: action.payload.navigationTabsList
        };

    default:
        return state;
    }
}