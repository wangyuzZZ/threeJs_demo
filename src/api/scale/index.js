import request from '@/utils/request'
/**
 * 获取称重任务
 */
export const getWeightTask = () => {
    return request({
        url: '/production/task/getWeighWork',
        method: 'get'
    })
}
/**
 * 获取称重配置信息
 */
export const getOpation = () => {
    return request({
        url: '/anotherSystem/config',
        method: 'get'
    })
}
/**
 * 完成生产任务
 * @param {String} id 生产单ID 
 */
export const completeTask = (data) => {
    return request({
        url: '/production/task/completeWeighTask',
        method: 'get',
        params: data
    })
}
/** 获取容器信息 */
export const getBoxInfos = (rfid) => {
    return request({
        url: '/production/container/getContainerByRfid/' + rfid,
        method: 'get',
    })
}