window.onload = function(){
    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes = document.querySelector(".tabDes")
    let tabDescription = [
        `<h3>title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos harum beatae tenetur laudantium. Quaerat molestiae fugiat quisquam iste esse accusamus ea eveniet illum vitae amet distinctio maxime quod, sint rerum?</p>`,
    `<h3>title2</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos harum beatae tenetur laudantium. Quaerat molestiae fugiat quisquam iste esse accusamus ea eveniet illum vitae amet distinctio maxime quod, sint rerum?</p>`,
    `<h3>title3</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos harum beatae tenetur laudantium. Quaerat molestiae fugiat quisquam iste esse accusamus ea eveniet illum vitae amet distinctio maxime quod, sint rerum?</p>`
]
    for(let i=0; i<tabTitles.length; i++){
        tabTitles[i].addEventListener("click",function(){
            tabTitles[0].classList.remove("on")

            for(let j=0; j<tabTitles.length; j++){
                tabTitles[j].classList.remove("on")
            }
            this.classList.add("on")
            tabDes.innerHTML = tabDescription[i]
        })
    }
}