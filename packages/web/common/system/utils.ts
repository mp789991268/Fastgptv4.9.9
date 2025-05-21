// 导入FingerprintJS库，用于生成用户指纹
import FingerprintJS from '@fingerprintjs/fingerprintjs';

/**
 * 获取用户的指纹信息
 * 此函数用于异步加载FingerprintJS并获取用户指纹信息，主要用于唯一标识用户
 */
export const getUserFingerprint = async () => {
  // 加载FingerprintJS库
  const fp = await FingerprintJS.load();
  // 获取用户指纹信息
  const result = await fp.get();
  // 打印用户ID
  console.log(result.visitorId);
};

/**
 * 检查当前页面是否使用HTTPS协议
 * @returns {boolean} 返回一个布尔值，表示当前页面是否使用HTTPS协议
 */
export const hasHttps = () => {
  // 检查当前页面的协议是否为HTTPS
  return window.location.protocol === 'https:';
};

// 导出环境变量中的基础URL，用于构建完整的URL路径
export const subRoute = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * 根据提供的URL生成完整的请求URL
 * @param {string} url - 可选参数，表示要构建的URL，默认为空字符串
 * @returns {string} 返回构建的完整URL
 */
export const getWebReqUrl = (url: string = '') => {
  // 如果未提供URL，则返回根路径
  if (!url) return '/';
  // 获取环境变量中的基础URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // 如果没有基础URL，则直接返回提供的URL
  if (!baseUrl) return url;

  // 如果提供的URL不以斜杠开头或已经以基础URL开头，则直接返回该URL
  if (!url.startsWith('/') || url.startsWith(baseUrl)) return url;
  // 否则，将基础URL和提供的URL拼接起来并返回
  return `${baseUrl}${url}`;
};
