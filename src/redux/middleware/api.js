import { get } from '../../utils/request'

// 执行网络请求
const fetchData = (endpoint, schema) => {
    return get(endpoint).then(data => {
        return normalizeData(data, schema)
    })
}


const normalizeData = (data, schema) => {
    const { id, name } = schema
    let kvObj = {}
    let ids = []
    if (Array.isArray(data)) {
        data.forEach(item => {
            kvObj[item[id]] = item
            ids.push(item[id])
        })
    } else {
        kvObj[data[id]] = data
        ids.push(data[id])
    }
    return {
        [name]: kvObj,
        ids
    }
}

export const FETCH_DATA = 'FETCH DATA'

export default store => next => action => {
    // 判断给action是否需要该中间件处理
    const callAPI = action[FETCH_DATA]
    
    if (typeof callAPI === 'undefined') {
        return next(action)
    }
    const { endpoint, schema, types } = callAPI
    if (typeof endpoint !== 'string') {
        throw new Error('endpoint必须是字符串类型的URL')
    }
    if (!schema) {
        throw new Error('必须指定领域实体的schema')
    }
    if (!Array.isArray(types) && types.length !== 3) {
        throw new Error('必须指定一个包含了三个action type的数组')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('action type必须为字符串')
    }

    const actionWith = data => {
        const finalAction = {...action, ...data}
        // 删除action标识
        delete finalAction[FETCH_DATA]
        return finalAction
    }
    // 三种类型对应着三种请求
    const [requestType, succesType, failureType] = types
    // 异步请求中
    next(actionWith({ type: requestType }))

    return fetchData(endpoint, schema).then(
        response => {
            next(actionWith({
                type: succesType,
                response
            }))
        },
        // 请求失败
        error =>
            next(actionWith({
                type: failureType,
                error: error.message || '获取数据失败'
            }))
    )
}
