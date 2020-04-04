function elem1()
{
    var element = document.getElementById("tab1");
    element.classList.add("active");
    var element = document.getElementById("tab2");
    element.classList.remove("active");
    var element = document.getElementById("elem1");
    element.classList.add("active");
    var element = document.getElementById("elem2");
    element.classList.remove("active");
}
function elem2()
{
    var element = document.getElementById("tab2");
    element.classList.add("active");
    var element = document.getElementById("tab1");
    element.classList.remove("active");
    var element = document.getElementById("elem2");
    element.classList.add("active");
    var element = document.getElementById("elem1");
    element.classList.remove("active");
}
function prof1()
{
    var element = document.getElementById("prof1");
    element.classList.add("active");
    var element = document.getElementById("prof2");
    element.classList.remove("active");
    var element = document.getElementById("info_prof1");
    element.classList.add("active");
    var element = document.getElementById("info_prof2");
    element.classList.remove("active");
    var element = document.getElementById("info_prof1");
    element.classList.add("show");
    var element = document.getElementById("info_prof2");
    element.classList.remove("show");

}
function prof2()
{
    var element = document.getElementById("prof2");
    element.classList.add("active");
    var element = document.getElementById("prof1");
    element.classList.remove("active");
    var element = document.getElementById("info_prof2");
    element.classList.add("active");
    var element = document.getElementById("info_prof1");
    element.classList.remove("active");
    var element = document.getElementById("info_prof2");
    element.classList.add("show");
    var element = document.getElementById("info_prof1");
    element.classList.remove("show");
}
function timer(){
    var obj=document.getElementById('timer_inp');
    obj.innerHTML--;
    var element = document.getElementById("download_mod");
    var time = document.getElementById("timer");
    if(obj.innerHTML==0){element.classList.add("active");time.classList.add("off");
        setTimeout(function(){},1000);}
    else{setTimeout(timer,1000);}
}
setTimeout(timer,1000);
