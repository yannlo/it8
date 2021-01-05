let check = document.getElementById("check");
check.addEventListener("click",function(event){
    event.stopPropagation();
    event.preventDefault();

    let menu = document.getElementById("menu");
    let menu_element = document.getElementById("menu_element");
    let icon = document.getElementById("icon");

    if(menu_element.style.display == "block"){
        icon.style.transform= "rotate(0deg)";
        icon.style.transition=".5s";
        menu_element.style.display="none";
        menu.style.width="60px";
        menu.style.transition=".5s";
        menu_element.style.transition=".2s";



    }else{

        menu_element.style.display="block";
        menu.style.width="30%";
        menu.style.transition=".5s";
        menu_element.style.transition=".2s";
        icon.style.transform= "rotate(90deg)";
        icon.style.transition=".5s";
    }
});