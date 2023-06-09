window.onload = function(){

    let station1 = new Swiper(".station1",{loop:true,
        direction:'horizontal',
        // slidesPerView:3.2, //슬라이드 개수의 반만큼 최대 적용 가능
        // spaceBetween:40,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:true,
    },
    navigation: {
        nextEl: ".csNextBtn",
        prevEl: ".csPrevBtn",
    },
    autoplay:{
        delay:1000,
        // pauseOnMouseEnter:true

    },
    speed:1000,
    breakpoints:{  //화면 너비에 따른 변화 입력 //station의 너비가 100%로 되어있어야 함
        320:{
            slidesPerView:1,
            spaceBetween:0
        },
        768:{

            slidesPerView:2,
            spaceBetween:10
        },
        1024:{
            slidesPerView:3,
            spaceBetween:20
        }
    }
})

document.querySelector(".station1").addEventListener("mouseover",function(){
    station1.autoplay.stop()
})

document.querySelector(".station1").addEventListener("mouseout",function(){
    station1.autoplay.start()
})
    
    

}