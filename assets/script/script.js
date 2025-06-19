function myMenuFuction(){
    var menuBtn = document.getElementById("myNavManu");

    if(menuBtn.className === "nav-manu"){
        menuBtn.className  += " responsive";
    } else {
        menuBtn.className = "nav-manu";
    }
};

window.onscroll = function() {
    headarshadow();
};

function headarshadow(){
    const navHeader = document.getElementById("header");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
         navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

var typingEffect = new Typed(".typeText", {
    strings : ["Deginer","Youtube", "Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80, 
    backDelay: 2000
})