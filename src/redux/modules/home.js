import { combineReducers } from 'redux'
import url from '../../utils/url'
import { FETCH_DATA } from '../middleware/api'
import { schema } from './entities/products'

// 定义一些常量
export const params = {
    // 请求路径
    PATH_LIKES: 'likes',
    // 一页显示数据条数
    PAGE_SIZE_LIKES: 5,
}

// ActionTypes
export const types = {
    FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST", 
    FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS", 
    FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE", 
}

// State
const initState = {
    likes: {
        isFetching: false,
        pageCount: 0,
        ids: []
    },
}

// Action
export const actions = {
    loadLikes: () => {
        return (dispatch, getState) => {
            // 获取页码下标
            const { pageCount } = getState().home.likes
            // 计算该页码第一条数据的下标
            const rowIndex = pageCount * params.PAGE_SIZE_LIKES
            const endpoint = url.getProductList(params.PATH_LIKES, rowIndex, params.PAGE_SIZE_LIKES)

            return dispatch(fetchLikes(endpoint))
        }
    },
}

const fetchLikes = (endpoint) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_LIKES_REQUEST,
            types.FETCH_LIKES_SUCCESS,
            types.FETCH_LIKES_FAILURE
        ],
        endpoint,
        schema
    }
})


// reducer
const likes = (state = initState.likes, action) => {
    switch (action.type) {
        case types.FETCH_LIKES_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.FETCH_LIKES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                pageCount: state.pageCount + 1,
                ids: state.ids.concat(action.response.ids)
            }
        case types.FETCH_LIKES_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state
    }
}



const reducer = combineReducers({
    likes,
})

export default reducer

// selectors
export const getLikes = state => {
    return state.home.likes.ids.map(id => {
        return state.entities.products[id]
    })
}

export const getPageCountOfLikes = state => {
    return state.home.likes.pageCount
}