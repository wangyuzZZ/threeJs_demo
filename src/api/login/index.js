import request from '@/utils/request'
/**
 * 登录
 * @param {String}} id 员工卡ID 
 */
export const login = (id) => {
    return request({
        url: '/organization/worker/login?rfid=' + id,
        method: 'post'
    })
}