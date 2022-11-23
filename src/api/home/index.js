import request from '@/utils/request'
/**
 * 分页查询  
 * @param {String} productionAreaEnum 
 */
// export function viewAreaList(productionAreaEnum) {
//     return request({
//       url: '/organization/productionArea/searchByTypes',
//       method: 'get',
//       params: {
//         productionAreaEnum: productionAreaEnum
//       }
//     })
//   }
export function getData() {
    return request({
        url: 'TestWokPlc',
        method: 'get'
    })
}