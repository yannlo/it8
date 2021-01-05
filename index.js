// gestion du menu

let check = document.getElementById("check");
check.addEventListener("click",function(event){
    event.stopPropagation();
    event.preventDefault();

    let menu = document.getElementById("menu");
    let menu_element = document.getElementById("menu_element");
    let icon = document.getElementById("icon");
    let content = document.getElementById("content");

    if(menu_element.style.display == "block"){
        icon.style.transform= "rotate(0deg)";
        icon.style.transition=".3s";
        menu_element.style.display="none";
        menu.style.width="60px";
        menu.style.transition=".3s";
        menu_element.style.transition=".6s";
        content.style.margin=" 0 0  0 25%";
        content.style.transition=".3s";
        content.style.width="75%";




    }else{

        menu_element.style.display="block";
        menu.style.width="30%";
        menu.style.transition=".3s";
        menu_element.style.transition=".6s";
        icon.style.transform= "rotate(90deg)";
        icon.style.transition=".3s";
        content.style.margin=" 0 0  0 35%";
        content.style.width="60%";

        content.style.transition=".3s";

    }
});

