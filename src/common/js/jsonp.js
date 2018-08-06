// 引入jsonp库
import originJSONP from 'jsonp';

// 导出jsonp方法
export default function jsonp(url, data, option) {
  // 判断地址是有参数还是无参数，无参数无‘？’，有参数有‘？’，有参数则在末尾添加‘&’连接更多参数
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
  // 返回一个promise
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    })
  })
}

// 处理参数
function param(data) {
  let url = '';
  for (var key in data) {
    // 拼接url参数
    let value = data[key] !== undefined ? data[key] : '';
    url += `&${key}=${encodeURIComponent(value)}`;
  }
  return url ? url.substring(1) : ''
}