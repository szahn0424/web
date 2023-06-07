$(document).ready(function(){

    //윈도우스크롤이 400 이상으로 내려가면 header태그의 스타일이 작은 스타일이 되고, 그렇지 않다면 기본스타일이 적용될 수 있도록

    $(window).scroll(function(){
        //스크롤바가 움직일 때마다 실행되는 소스코드
        let winTop = $(window).scrollTop() 
        //스크롤바가 위에서 얼만큼 내려와있는지를 계산
        if(winTop>=400){
            $("header").addClass("sma")

        }else{
            $("header").removeClass("sma")
        }

    });

    $(".btnTop").click(function(){
        $("html,body").animate({scrollTop:0},1000)


    })
    //각각의 메뉴리스트를 클릭했을 때 해당되는 영역으로 부드럽게 스크롤이동될 수 있도록
    $(".gnb>li>a").click(function(){
       let target = $(this).attr("href")
       //클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target변수에 저장된다(문자데이터형태로 "#1".."#s2...")
    //    alert(target)
        let target_top = $(target).offset().top
        $("html,body").animate({scrollTop:target_top},1000)

    })

});