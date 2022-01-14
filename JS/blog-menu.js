const iconodemenu = document.querySelector("#btnmenu-blog");
const menudeblog = document.querySelector(".vinetas");
const close1 = document.querySelector("#btncierre");
iconodemenu.addEventListener("click",function(){
    menudeblog.classList.add("blog-menu");
});
close1.addEventListener("click",function(){
    menudeblog.classList.remove("blog-menu");
});