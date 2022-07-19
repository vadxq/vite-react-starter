/**
 * 获取客户端cookie
 * @param {String} name cookie name
 */
export const getCookie = (name: string) => {
  const value = `; ${typeof window === 'undefined' ? '' : document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    const ppop = parts.pop();
    if (ppop) {
      return ppop.split(';').shift();
    }
  }
  return '';
};
