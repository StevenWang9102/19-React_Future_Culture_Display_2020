// ----------------- Left Hover --------------
const hoverBox = document.getElementsByClassName("hoverBox");
const hoverImg = document.getElementsByName("hoverImg");
// console.log(Object.values(hoverImg)[0]);

Object.values(hoverBox)[0].addEventListener("mouseover", (event) => {
  Object.values(hoverBox)[0].style.top = "0px"
});

// 似乎需要合并。。。。
Object.values(hoverImg)[0].addEventListener("mouseover", (event) => {
  Object.values(hoverBox)[0].style.top = "0px"
});

Object.values(hoverBox)[0].addEventListener("mouseout", (event) => {
  Object.values(hoverBox)[0].style.top = "480px"
});

// -------------- Right Hover --------------
const hoverRight = document.getElementsByClassName("hover-on-right")[0];
const imgBox = document.getElementsByClassName("img-wrapper")[0];
const titlewrapper = document.getElementsByName("titlewrapper")[1];

console.log(imgBox);
console.log(titlewrapper);

imgBox.addEventListener("mouseover", (event) => {
  hoverRight.style.left = "0px";
  setTimeout(function(){
    titlewrapper.style.display = "inline-block"
  },600)
});

imgBox.addEventListener("mouseout", (event) => {
  hoverRight.style.left = "-440px";
  titlewrapper.style.display = "none"

});


// -------------- Right Hover Words -------------


