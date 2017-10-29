$(function(){
    $(".navs").on("click","li",function(){
        $(".article").eq($(this).index()).show().siblings().hide();
        $(this).addClass("active01").siblings().removeClass("active01")
    })
})