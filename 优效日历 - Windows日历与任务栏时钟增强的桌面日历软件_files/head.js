if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|ArkWeb/i.test(navigator.userAgent)) {
    // 检查当前URL是否已经是移动版
    if (window.location.href.indexOf('www.yxcal.com/m') === -1) {
        // 获取当前URL
        var currentUrl = window.location.href;

        // 构建新的URL，将域名后添加/m
        var mobileUrl = currentUrl.replace('www.yxcal.com', 'www.yxcal.com/m');

        // 重定向到新的URL
        window.location.href = mobileUrl;
    }
}