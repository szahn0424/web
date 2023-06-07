// window.onload = function(){

//     let bannerDT = document.querySelectorAll(".mainbanner>dt")

//     for(let i=0; i<bannerDT.length; i++){
//         bannerDT[i].addEventListener("click",function(){
        
//             bannerDT[0].classList.remove("on")
//             bannerDT[1].classList.remove("on")
//             bannerDT[2].classList.remove("on")

//             this.classList.add("on")
//         })
    
//     }

//     let tabDT = document.querySelectorAll(".tabmenu>dt")

//     for(let =0 ; i<tabDT.length; i++){
//         tabDT[i].addEventListener("click",function(){
//             for(let k=0; k<tabDT.length; k++){
//                 tabDT[k].classList.remove("on")
                
//             }

//             this.classList.add("on")
//         })
//     }
// }

    












window.onload = function(){
//     let dtList = document.querySelectorAll(".tabmenu>dt")

//     for(let i=0; i<dtList.length; i++){
//         dtList[i].addEventListener("click",function(){
//             dtList[0].classList.remove("on")
//             dtList[1].classList.remove("on")
      
//             for(let j=0; j<dtList.length; j++){
//                 dtList[j].classList.remove("on")
//             }
//             this.classList.add("on")
          
//         })
//     }

    

// }


function tab(classname){
    let tab = document.querySelectorAll("."+classname+">dt")
    for(let i=0; i<tab.length; i++){
        tab[i].addEventListener("click",function(){
            for(let k=0; k<tab.length; k++){
                tab[k].classList.remove("on")
            }
            this.classList.add("on")
        })
    }
}
tab("mainbanner")
tab("tabmenu")

}

