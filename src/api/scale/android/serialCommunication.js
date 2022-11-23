/** 开始获取串口称重数据 */
export function start() {
    scaleUtils.start();
}
/** 停止获取串口称重数据 */
export function stop() {
    scaleUtils.stop();
}
/** 重置称重数据 */
export function reset() {
    scaleUtils.reset();
}
/** 去皮 */
export function shelling(num) {
    scaleUtils.shelling(num);
}
/** 获取容器信息 */
export function getBoxInfo() {
    return scaleUtils.getRfidNo()
}
export function test() {
    return JSON.stringify({
        code: 200,
        data: {
            value: '000E0040150D6A3D5B41'
        }
    })
}