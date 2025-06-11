document.addEventListener('DOMContentLoaded', () => {
    // 初始化所有功能
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initBackToTop();
});

// 导航初始化
function initNavigation() {
    // 下载按钮点击事件 - 修改为显示下载方式弹窗
    document.querySelector('.download-button')?.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        document.querySelector('.download-modal')?.classList.add('active');
        document.body.classList.add('no-scroll'); // 添加禁止滚动类
    });

    // 关闭弹窗按钮
    document.querySelector('.modal-close')?.addEventListener('click', () => {
        document.querySelector('.download-modal')?.classList.remove('active');
        document.body.classList.remove('no-scroll'); // 移除禁止滚动类
    });

    // 点击外部关闭
    document.querySelector('.download-modal')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('download-modal')) {
            e.target.classList.remove('active');
            document.body.classList.remove('no-scroll'); // 移除禁止滚动类
        }
    });
}

// 平滑滚动导航
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 滚动动画初始化
function initScrollAnimations() {
    const scrollElements = document.querySelectorAll('.feature-card, .step');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach(el => {
            if (elementInView(el, 1.25)) {
                el.classList.add('scrolled');
            } else {
                el.classList.remove('scrolled');
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        if(!window.scrollTicking) {
            requestAnimationFrame(() => {
                handleScrollAnimation();
                window.scrollTicking = false;
            });
            window.scrollTicking = true;
        }
    });
}

// 返回顶部按钮功能
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        // 显示/隐藏按钮
        window.addEventListener('scroll', function() {
            backToTop.classList.toggle('show', window.pageYOffset > 300);
        });
        
        // 平滑滚动到顶部
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}