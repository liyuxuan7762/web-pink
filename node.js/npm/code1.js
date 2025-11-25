/*
 * @Author: Li 776239423@qq.com
 * @Date: 2025-11-25 09:32:56
 * @LastEditors: Li 776239423@qq.com
 * @LastEditTime: 2025-11-25 09:59:39
 * @FilePath: \web-pink\node.js学习\npm学习\code1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const dayjs = require('dayjs');
const utils = require('./utils');

console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
console.log(utils.getArraySum([1, 2, 3, 4, 5]));
