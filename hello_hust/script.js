function startSlideShow(){
    var images = document.querySelectorAll(".big_box_img");
    var currentIndex=0;

    setInterval(function(){
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1)%images.length;
        images[currentIndex].classList.add("active");
    },2000)
}

// 确保 DOM 加载完成后再运行
document.addEventListener("DOMContentLoaded", startSlideShow)