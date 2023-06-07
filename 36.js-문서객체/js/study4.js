window.onload = function(){
    let title = document.querySelector("#title")
    title.style.color = "blue"
    let titleParent = title.parentElement //부모태그를 선택한다
    titleParent.style.border = "1px solid blue"

    let ulTag = document.querySelector(".list")
    let list = ulTag.children
    // list[0].style.borderBottom = "1px solid black"
    // list[1].style.borderBottom = "1px solid black"
    // list[2].style.borderBottom = "1px solid black"
    // list[3].style.borderBottom = "1px solid black"

    for(let i=0; i<list.length; i++){
        list[i].style.borderBottom = "1px solid black"
    }

    title.nextElementSibling.style.background = "lightblue"
    list[0].nextElementSibling.nextElementSibling.style.color = "red"  //다음형제 선택
    ulTag.previousElementSibling.style.textDecoration = "underline"
    
}




// for(let dan=0; dan<=3; dan++){document.write(`.list`)
// for(let a=1;a<=9;a++){document.write(`<li>${dan}x${a}=${a*dan}</li>`)}
// document.write(`.list`)}
