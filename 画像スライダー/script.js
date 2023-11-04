// スライダーの現在のインデックス
let currentIndex = 0;

// スライドを表示する関数
function showSlide(index) {
    const slider = document.getElementById('slider');
    const slides = document.getElementsByClassName('slide');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const newPosition = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + newPosition + ')';
}

// スライドを変更する関数
function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// 初期状態でスライダーを表示
showSlide(currentIndex);
