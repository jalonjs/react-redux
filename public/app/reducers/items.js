import {ADD_ITEM, DELETE_ITEM, DELETE_ALL} from '../constants/actionTypes'

const initialItems = [];

export default function items(state = initialItems, action) {
    const item = action.item;
    const index = state.indexOf(item);
    switch (action.type) {
        case ADD_ITEM:
            return [...state, item];
        case DELETE_ITEM:
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        case DELETE_ALL:
            return [];
        default:
            return state
    }
}
