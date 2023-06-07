window.onload = function(){
    let menuState = false
    //문서를 끝까지 읽은 뒤 실행할 소스코드//
    let btnMenu = document.querySelector(".btnMenu")
    let navTag = document.querySelector("nav")
    btnMenu.addEventListener("click",function(){
        if(menuState == false){

            //메뉴 닫혀있을때 실행되는 코드
            btnMenu.classList.add("close")
            navTag.classList.add("show")
            menuState = true
        }else{
            btnMenu.classList.remove("close")
            navTag.classList.remove("show")
            menuState = false
        }
            //메뉴가 열려있는경우 실행되는 코드
        
    })

}