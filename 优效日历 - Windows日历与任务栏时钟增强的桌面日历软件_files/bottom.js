// 定义下载链接
var downloadWindowsUrl = "https://dl.youxiao.cn/api/1.0/download/url?url=https://vip.123pan.cn/1826849647/%E4%BC%98%E6%95%88%E6%97%A5%E5%8E%86/yxcalendar_latest.exe";
var downloadWindowsWebUrl = "https://dl.youxiao.cn/api/1.0/download/url?url=https://vip.123pan.cn/1826849647/%E4%BC%98%E6%95%88%E6%97%A5%E5%8E%86/yxcalendar_latest_web.exe";

var downloadWindowsBakUrl = "https://zhcy.oss-cn-hangzhou.aliyuncs.com/yxcalendar/yxcalendar_latest.exe";
var downloadWindowsWebBakUrl = "https://zhcy.oss-cn-hangzhou.aliyuncs.com/yxcalendar/yxcalendar_latest_web.exe";

// 函数用于设置下载链接
function setWindowsDownloadUrl(element) {
    var params = new URLSearchParams(window.location.search);
    if (params.has('from') && params.get('from') === 'web') {
        element.href = downloadWindowsWebUrl;
    } else {
        element.href = downloadWindowsUrl;
    }
}

function setWindowsDownloadBakUrl(element) {
    var params = new URLSearchParams(window.location.search);
    if (params.has('from') && params.get('from') === 'web') {
        element.href = downloadWindowsWebBakUrl;
    } else {
        element.href = downloadWindowsBakUrl;
    }
}

function appendParams(element) {
    console.log("appendParam:", element);
    try {
        // 获取当前页面的URL
        var currentUrl = new URL(window.location);

        // 获取当前页面的所有查询参数
        var currentParams = currentUrl.searchParams;

        // 如果链接中已经包含查询参数
        if (element.href.indexOf('?') !== -1) {
            // 获取链接已有的查询参数
            var linkParams = new URLSearchParams(element.href.split('?')[1]);
            // 合并查询参数
            for (let [key, value] of currentParams) {
                linkParams.set(key, value);
            }
            // 更新链接的查询参数
            element.href = `${element.href.split('?')[0]}?${linkParams}`;
        } else {
            // 如果链接中没有查询参数，直接添加当前页面的所有查询参数
            element.href += currentUrl.search;
        }
    } catch (error) {
        console.error("Error occurred while appending params: ", error);
        // 发生异常时，取消所有参数跳转，恢复原始href
        element.href = element.getAttribute('href').split('?')[0];
    }
}