let tabDescription = [
    `<h3>title</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos harum beatae tenetur laudantium. Quaerat molestiae fugiat quisquam iste esse accusamus ea eveniet illum vitae amet distinctio maxime quod, sint rerum?</p>`,
`<h3>title2</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos harum beatae tenetur laudantium. Quaerat molestiae fugiat quisquam iste esse accusamus ea eveniet illum vitae amet distinctio maxime quod, sint rerum?</p>`,
`<h3>title3</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos harum beatae tenetur laudantium. Quaerat molestiae fugiat quisquam iste esse accusamus ea eveniet illum vitae amet distinctio maxime quod, sint rerum?</p>`
]

$(document).ready(function(){
    $(".tabTit>li").click(function(){
        $(".tabTit>li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index() //index()함수는 앞에서 선택된 태그의 부모태그기준 순번을 리턴함//
        $(".tabDes").html(tabDescription[idx])

    })
})