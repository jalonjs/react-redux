import { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from '../constants/actionTypes'

export function addItem(text) {
    return dispatch => {
        setTimeout(() => dispatch({type: ADD_ITEM, item: text}), 100)
    }
}
export function deleteItem(item) {
    return {
        type: DELETE_ITEM,
        item
    }
}
export function deleteAll() {
    return {
        type: DELETE_ALL
    }
}
