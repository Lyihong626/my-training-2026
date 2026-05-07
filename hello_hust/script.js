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


    //---------------------------大轮播图------------------------

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
    leftBtn.onclick = function () {
        clearInterval(time);//把编号为 time 的定时器关掉，让那个循环执行的任务不再继续
        index == 0 ? index = images.length - 1 : index--;
        trans();
        autoPlay();//然后重新启动定时器
    }
    rightBtn.onclick = function () {
        clearInterval(time);//把编号为 time 的定时器关掉，让那个循环执行的任务不再继续
        index == images.length - 1 ? index = 0 : index++;
        trans();
        autoPlay();
    }

    //鼠标放在轮播图上，定时器停止，移除后定时器启动
    //鼠标移入
    slideShowBox.addEventListener('mouseenter', () => {
        clearInterval(time);
    })
    //鼠标移出
    slideShowBox.addEventListener('mouseleave', () => {
        autoPlay();
    })

    btnClick();
    //下方圆点切换
    function btnClick() {
        for (let i = 0; i < btnList.length; i++) {
            btnList[i].onclick = function () {
                clearInterval(time);
                index = i;
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


    //--------------------------小轮播图---------------------------------



    let little_images = document.querySelectorAll(".left_img");
    let index2 = 0;
    let leftBtn2 = document.querySelector(".ct1_slid_left");
    let rightBtn2 = document.querySelector(".ct1_slid_right");
    let little_btnList = document.querySelectorAll(".box_zhiding2>a");
    let slidTitle = document.querySelector(".slid_bottom");
    let little_sildShow = document.querySelector(".ct1-left_bottom");

    let data = [
        {
            title: "<a href='https://cs.hrbust.edu.cn/2023/0913/c3709a89213/page.htm' target='_blank' title='校长刘侠、副校长杜军深入学院开展学科建设专题调研'><span style='font-weight:bold;'>校长刘侠、副校长杜军深入学院开展学科...</span></a>"
        },
        {
            title: "<a href='https://cs.hrbust.edu.cn/2026/0421/c3709a104520/page.htm' target='_blank' title='计算机科学与技术学院召开2026版人才培养方案论证会'>计算机科学与技术学院召开2026版人才培...</a>"
        },
        {
            title: "<a href='https://cs.hrbust.edu.cn/2026/0325/c3709a103582/page.htm' target='_blank' title='计算机科学与技术学院领导深入新生晚自习巡查指导'>计算机科学与技术学院领导深入新生晚自...</a>"
        },
        {
            title: "<a href='https://cs.hrbust.edu.cn/2026/0320/c3709a103471/page.htm' target='_blank' title='压实责任 全力攻坚——计算机科学与技术学院召开2026届毕业生春季学期专项推进会'>压实责任 全力攻坚——计算机科学与技术...</a>"
        },
        {
            title: "<a href='https://cs.hrbust.edu.cn/2026/0319/c3709a103444/page.htm' target='_blank' title='【书记领讲开学第一课·思想领航启新程】凝心铸魂强党性 挺膺担当建新功'>【书记领讲开学第一课·思想领航启新程...</a>"
        }
    ]

    //设置定时器

    let time2;

    autoPlay2();
    function autoPlay2() {
        if (time2) clearInterval(time2);
        time2 = setInterval(() => {
            index2 = (index2 + 1) % little_images.length;
            trans2();
        }, 3000)
    }

    //鼠标移入移出，使轮播图停止计时

    little_sildShow.addEventListener("mouseenter", () => {
        clearInterval(time2);
    })
    little_sildShow.addEventListener("mouseleave", () => {
        autoPlay2();
    })

    //左右箭头切换
    leftBtn2.onclick = function () {
        clearInterval(time2);
        index2 == 0 ? index2 = little_images.length - 1 : index2--;
        trans2();
        autoPlay2();
    }
    rightBtn2.onclick = function () {
        clearInterval(time2);
        index2 == little_images.length - 1 ? index2 = 0 : index2++;
        trans2();
        autoPlay2();
    }


    btnClick2();
    //小圆点定向切换
    function btnClick2() {
        for (let i = 0; i < little_btnList.length; i++) {
            little_btnList[i].onclick=function(){
                clearInterval(time2);
                index2 = i;
                trans2();
                autoPlay2();
            }

        }
    }

    //切换函数
    function trans2() {
        for(let i=0;i<little_images.length;i++){
            little_images[i].classList.remove("left_img_show");
            little_btnList[i].classList.remove("little_focus_page");
        }
        slidTitle.innerHTML = data[index2].title;
        little_images[index2].classList.add("left_img_show");
        little_btnList[index2].classList.add("little_focus_page");
        

    }





    //------------------自动轮播图，鼠标悬浮暂停---------------------
    let slidState = document.querySelector(".ct3_tdiv");

    slidState.addEventListener("mouseenter", () => {
        slidState.classList.add("paused");
    })
    slidState.addEventListener("mouseleave", () => {
        slidState.classList.remove("paused");
    })


    //显示当前登录用户信息
    // 获取当前登录的用户
    const currentUser = localStorage.getItem('currentUser');
    document.querySelector('.currentUser h2').innerHTML=`欢迎你<br>${currentUser}`;


}

