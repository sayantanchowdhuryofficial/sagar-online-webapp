function toggleMenu(){

let s=document.getElementById("sidebar")

if(s.style.left==="0px"){
s.style.left="-240px"
}else{
s.style.left="0px"
}

}

function openPage(id){

let pages=document.querySelectorAll(".page")

pages.forEach(p=>p.style.display="none")

document.getElementById(id).style.display="block"

}
