export const SEARCH = "search";
export const SET_EVENTS = "set-events";

export const search = (searchString) => {
    return {
        type: SEARCH,
        data: searchString,
    };
};

export const setEvents = (events) => {
    return {
        type: SET_EVENTS,
        data: events,
    };
};
