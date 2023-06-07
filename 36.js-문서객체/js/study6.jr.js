$(document).ready(function(){

    let menuState = false;

    $(".btnMenu").click(function(){
        if(menuState == false){

            $(".btnMenu").addClass("close")
            $("nav").addClass("show")

            // 닫혀있음->여는기능 추가
            menuState = true

        }else{

            $(".btnMenu").removeClass("close")
            $("nav").removeClass("show")

            // 열려있음->닫는기능 추가
            menuState = false
        }



    })


})