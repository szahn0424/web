$(document).ready(function(){

    $(window).scroll(function(){
        let winSCT = $(window).scrollTop()
        console.log(winSCT)
        if(winSCT>400){
            $("body").addClass("dark")


        }else{
            $("body").removeClass("dark")
        }
        
        // {
        //     alert("400이상 스크롤해서 내려왔습니다")
       

    })


})