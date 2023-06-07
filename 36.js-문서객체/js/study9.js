window.onload = function(){
    let nextBtn = document.querySelector(".btnNext")
    let prevBtn = document.querySelector(".btnPrev")
    let train = document.querySelector(".train")
    let trainList = train.children
    let pageList = document.querySelectorAll(".pagination>li")

    let count = 0 
    nextBtn.addEventListener("click",function(){
        count++
        if(count>3){count=0}
        train.style.transform = "translateX(-"+25*count+"%)"
        
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
            pageList[i].classList.remove("on")
        }
    

        trainList[count].classList.add("on")
        pageList[count].classList.add("on")
    })

    prevBtn.addEventListener("click",function(){
        count--
        if(count<0){count=3}
        train.style.transform = "translateX(-"+25*count+"%)"

        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove("on")
        }
    

        trainList[count].classList.add("on")
        pageList[count].classList.add("on")

        
    })

    // pageList[0].addEventListener("click",function(){
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove("on")
    //     }
    

    //     trainList[0].classList.add("on")
    //     pageList[0].classList.add("on")

    //     train.style.transform = "translateX(-"+25*0+"%)"
    // })

    // pageList[1].addEventListener("click",function(){
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove("on")
    //     }
    

    //     trainList[1].classList.add("on")
    //     pageList[1].classList.add("on")

    //     train.style.transform = "translateX(-"+25*1+"%)"
    // })

    
    // pageList[2].addEventListener("click",function(){
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove("on")
    //     }
    

    //     trainList[2].classList.add("on")
    //     pageList[2].classList.add("on")

    //     train.style.transform = "translateX(-"+25*2+"%)"
    // })

    
    // pageList[3].addEventListener("click",function(){
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove("on")
    //     }
    

    //     trainList[3].classList.add("on")
    //     pageList[3].classList.add("on")

    //     train.style.transform = "translateX(-"+25*3+"%)"
    // })

        for(let a=0; a<4; a++){
            pageList[a].addEventListener("click",function(){
                count = a //순번에 맞춘 인덱스를 카운트변수에 저장한다.
                for(let i=0; i<trainList.length; i++){
                    trainList[i].classList.remove("on")
                    pageList[i].classList.remove("on")
                }
            
        
                trainList[a].classList.add("on")
                pageList[a].classList.add("on")
        
                train.style.transform = "translateX(-"+25*a+"%)"
            })
        
        }



}