/*
 * @Description: 
 * @Author: changhong.wang
 * @Date: 2021-07-28 04:19:21
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-07-28 04:20:01
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/large-number.min');
} else {
    module.exports = require('./dist/large-number');
}