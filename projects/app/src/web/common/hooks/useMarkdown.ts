// 导入用于构建请求URL的工具函数
import { getWebReqUrl } from '@fastgpt/web/common/system/utils';
// 导入React Query的钩子用于处理数据查询
import { useQuery } from '@tanstack/react-query';

/**
 * 异步获取Markdown内容
 * @param url Markdown文件的URL
 * @returns 返回Markdown文本内容
 */
export const getMd = async (url: string) => {
  // 构建请求URL并发送网络请求获取Markdown内容
  const response = await fetch(getWebReqUrl(`/docs/${url}`));
  // 将响应内容转换为文本格式
  const textContent = await response.text();
  // 返回Markdown文本内容
  return textContent;
};

/**
 * 使用React Query钩子获取Markdown内容
 * @param url Markdown文件的URL
 * @returns 返回包含Markdown内容的对象
 */
export const useMarkdown = ({ url }: { url: string }) => {
  // 使用useQuery钩子进行数据查询，查询键为Markdown文件的URL，查询函数为getMd
  const { data = '' } = useQuery([url], () => getMd(url));

  // 返回Markdown内容
  return {
    data
  };
};
