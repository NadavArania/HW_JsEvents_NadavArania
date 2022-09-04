var ld = document.getElementById("lower-div");
ld.style.display = "none";
function showLowerDiv(str){
    ld.style.display = "block";
    ld.innerHTML = str;
}
function hideLowerDiv(){
    ld.style.display = "none";
}


