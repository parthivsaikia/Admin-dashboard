const root = document.documentElement;
const theme = root.className;
const themeBtn = document.querySelector('.theme-button');
function changeTheme(){
    if(root.className=="dark"){
        root.className = "light";
        themeBtn.querySelector("img").src = "images/lightmode.svg"
    }else{
        root.className = "dark";
        themeBtn.querySelector("img").src = "images/darkmode.svg"
        themeBtn.querySelector("img").className = "filtered-svg";
    }
    

}


themeBtn.addEventListener('click',changeTheme);
console.log(root.className);