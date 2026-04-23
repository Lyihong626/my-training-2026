/*
window.onload 是一个事件属性，
意思是：当整个网页（包括图片、样式、外部文件等所有资源）全部加载完成后，自动执行后面指定的函数。
*/ 

window.onload = function startSlideShow() {
    let images = document.querySelectorAll(".big_box_img");
    let index = 0;

    let leftBtn = document.querySelector(".slid_left");
    let rightBtn = document.querySelector(".slid_right");
    let btnList = document.querySelectorAll(".box_zhiding1>a");

    let slideShowBox = document.querySelector(".slideshow");

    let time;

    autoPlay();
    function autoPlay() {
        //定时器每次都执行这个函数,setInterval是定时器
        if (time) clearInterval(time);   // 先清除已有的，避免多个定时器同时运行
        time = setInterval(() => {
            //箭头函数
            index = (index + 1) % images.length;
            trans();

        }, 2000)
    }

    //左右切换
    leftBtn.onclick=function(){
        clearInterval(time);//把编号为 time 的定时器关掉，让那个循环执行的任务不再继续
        index==0?index=images.length-1:index--;
        trans();
        autoPlay();//然后重新启动定时器
    }
    rightBtn.onclick=function(){
        clearInterval(time);//把编号为 time 的定时器关掉，让那个循环执行的任务不再继续
        index==images.length-1?index=0:index++;
        trans();
        autoPlay();
    }

    //鼠标放在轮播图上，定时器停止，移除后定时器启动
    //鼠标移入
    slideShowBox.addEventListener('mouseenter',()=>{
        clearInterval(time);
    })
    //鼠标移出
    slideShowBox.addEventListener('mouseleave',()=>{
        autoPlay();
    })

    btnClick();
    //下方圆点切换
    function btnClick(){
        for(let i=0;i<btnList.length;i++){
            btnList[i].onclick=function(){
                clearInterval(time);
                index=i;
                trans();
                autoPlay();
            }
        }
    }

    //定义一个方法，专门用来切换
    function trans() {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
            btnList[i].classList.remove("big_focus_page")
        }
        images[index].classList.add("active");
        btnList[index].classList.add("big_focus_page")

    }


    //自动轮播图，鼠标悬浮暂停
    let slidState = document.querySelector(".ct3_tdiv");
    slidState.addEventListener("mouseenter",()=>{
        slidState.classList.add("paused");
    })
    slidState.addEventListener("mouseleave",()=>{
        slidState.classList.remove("paused");
    })


}

