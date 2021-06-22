import { SEARCH, SET_EVENTS } from "./action";

const defaultState = {
    searchString: "",
    events: [],
    filteredEvents: [],
};

export const eventReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case SEARCH:
            const filteredValues =
                action.data !== ""
                    ? state.events.filter((e) =>
                          e.title
                              .toLowerCase()
                              .includes(action.data.toLowerCase())
                      )
                    : state.events.slice();
            state = {
                ...state,
                filteredEvents: filteredValues,
                searchString: action.data,
            };
            return state;
        case SET_EVENTS:
            state = {
                ...state,
                events: action.data.slice(),
                filteredEvents: action.data.slice(),
            };
            return state;
        default:
            return state;
    }
};
