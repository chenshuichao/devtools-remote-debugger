export default {
  zh: {
    tips: '只支持Chrome/Edge浏览器进行调试',
    favicon: '图标',
    title: '页面标题',
    pageUrl: '页面地址',
    ua: 'UserAgent',
    time: '连接时间',
    refresh: '刷新',
    demo: '《调试Demo》',
    usage: '如何接入远程调试？',
    debugBtn: '调试',
    useTitle: '首先你需要在HTML中加载sdk.js，并将script标签放在head标签中',
    notice: '注意事项：',
    notice_1: '由于同源策略的限制，你可能需要进行以下的变更',
    notice_2: 'Chrome浏览器默认不允许JavaScript读取不同域的CSSRule，解决方案是样式的link标签添加',
    notice_3: '捕获Javascript的具体错误信息，同样需要在script标签添加',
    notice_4: '以上添加crossorigin的资源域名需要支持',
  },
  en: {
    tips: 'Only Chrome/Edge browsers are supported for debugging',
    favicon: 'Favicon',
    title: 'Page Title',
    pageUrl: 'Page Url',
    ua: 'UserAgent',
    time: 'Connection Time',
    refresh: 'Refresh',
    demo: '[Debug Demo]',
    usage: 'How to use?',
    debugBtn: 'Debug',
    useTitle: 'First you need to load sdk.js in HTML and put the script tag in the head tag',
    notice: 'Precautions:',
    notice_1: 'Due to the restrictions of the same-origin policy, you may need to make the following changes',
    notice_2: 'Chrome browser does not allow JavaScript to read CSSRule of different domains by default. The solution is to add the link tag of the style',
    notice_3: 'To capture the specific error information of Javascript, you also need to add in the script tag',
    notice_4: 'Add crossorigin resource domain names above need to support',
  },
};
