// カスタムカーソル
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        follower.style.left = e.clientX - 11 + 'px';
        follower.style.top = e.clientY - 11 + 'px';
    }, 50);
});

// スクロールで要素を表示
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);

// 初期表示時にも実行
reveal();
