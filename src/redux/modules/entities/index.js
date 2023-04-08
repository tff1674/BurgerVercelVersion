import { combineReducers } from 'redux'
import products from './products'
import shops from './shops'
import keywords from './keywords'

//合并领域状态
const rootReducer = combineReducers({
    products,
    shops,
    keywords
})

export default rootReducer
