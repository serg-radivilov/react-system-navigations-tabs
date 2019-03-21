// initialization
import initialNavigationTabs from "../initial-navigation-tabs";

// export actions
export const systemNavigationTabsInitializationAction = () => (dispatch) => {
    const navigationTabsList = initialNavigationTabs.map((item, inx) => {
        const initialSettings = {
            id: inx,
            isOpen: false,
        };

        return {
            ...initialSettings,
            ...item
        }
    });

    dispatch({
        type: "UPDATE_NAVIGATION_TABS_LIST",
        payload: {
            navigationTabsList
        }
    })
};

export const createNewTabAction = (params) => (dispatch, getState) => {
    const { navigationTabsList } = getState().systemNavigationTabsState;

    const id = String(Math.floor(Math.random() * 1000000000));

    let updateNavigationTabsList = navigationTabsList.map((item) => ({ ...item, isOpen: false }));
    let newItemTab = {
        id,
        isOpen: true,
        tabTitle: `TAB - ${ id }`,
        componentId: "0",
        testName: `Title CUSTOM - ${ id }`,
        testText: `Hello, is CUSTOM ${ id }`
    };

    if (params) {
        if (updateNavigationTabsList.filter((item) => (item.id === params.id)).length !== 0) {
            updateNavigationTabsList = updateNavigationTabsList.map((item) => ({
                ...item,
                isOpen: item.id === params.id,
            }));
        } else {
            updateNavigationTabsList.push({ ...newItemTab, ...params, isOpen: true });
        }
    } else {
        updateNavigationTabsList.push(newItemTab);
    }

    dispatch({
        type: "UPDATE_NAVIGATION_TABS_LIST",
        payload: {
            navigationTabsList: updateNavigationTabsList
        }
    })
};

export const updateNavigationListAction = (navigationTabsList) => ({
    type: "UPDATE_NAVIGATION_TABS_LIST",
    payload: {
        navigationTabsList
    }
});