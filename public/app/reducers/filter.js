import { FILTER_ITEM } from '../constants/actionTypes'

const initialFilterItem = 'ch'

export default function filter(state = initialFilterItem, action) {
    switch(action.type) {
        case FILTER_ITEM:
            return action.filterItem
        default:
            return state
    }
}
