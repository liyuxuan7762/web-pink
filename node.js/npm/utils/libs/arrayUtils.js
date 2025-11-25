/*
 * @Author: Li 776239423@qq.com
 * @Date: 2025-11-25 09:39:41
 * @LastEditors: Li 776239423@qq.com
 * @LastEditTime: 2025-11-25 09:41:33
 * @FilePath: \web-pink\node.js学习\npm学习\utils\libs\arrayUtils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const getArraySum = (arr) => {
  return arr.reduce((pre, cur) => pre + cur, 0);
}

module.exports = {
  getArraySum
}