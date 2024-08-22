let sat=document.getElementById("saturate");
let con=document.getElementById("contrast");
let bri=document.getElementById("brihtness");
let sep=document.getElementById("sepia");
let gra=document.getElementById("grayscale");
let blu=document.getElementById("blur");
let hue=document.getElementById("hue-rotate");
let up=document.getElementById("upload");
let dow=document.getElementById("download");
let im= document.getElementById("img");

let re=document.querySelector("span");
imgbox=document.querySelector(".imgbox");
window.onload=function () {
  dow.style.display='none';
  re.style.display='none';
  imgbox.style.display='none';
}

function reset(){
  img.style.filter="none";
   saturate.value="100";
       contrast.value="100";
       sepia.value="0";
      grayscale.value="0";
}

up.onchange = function(){
  reset();
  dow.style.display='block';
  re.style.display='block';
  imgbox.style.display='block';
  // add photo in websit
  let file= new FileReader();
   file.readAsDataURL(up.files[0]);
   file.onload = function(){
    img.src=file.result;
   }
   
  
}
  let filters=document.querySelectorAll("ul li input");
   filters.forEach(filter =>{
    filter.addEventListener("input",function(){
      img.style.filter=`
      saturate(${saturate.value}%)
       contrast(${contrast.value}%)
       sepia(${sepia.value}%)
      grayscale(${grayscale.value})

      `
      
    })
   })
//  brightness(${brightness.value}%)
//  blur(${blur.value}px)
//  hue-rotate(${hue-rotate.value}edg)