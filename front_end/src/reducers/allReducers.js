import {combineReducers} from 'redux'
import articleReducer from './articleReducer'
import cartReducer from './cartReducer'
const allReducers = combineReducers({
    article: articleReducer,
    cart: cartReducer
})

export default allReducers