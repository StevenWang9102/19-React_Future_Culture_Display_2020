const next = document.getElementsByClassName("Next");
// const galleryImg = document.getElementsByClassName("gallery-img");
// const whatWeDo = document.getElementById("what-we-do");
const ball = document.getElementsByClassName("float-ball");
const header1 = document.getElementsByName("whatwe").item(1);
// name="what-we-do-next"
// const nextOfWhatWeDo = document.getElementsByName("what-we-do-next").item(0);


// -------------- Next Button Click ------------
Object.values(next).map((element, index) => {

  // 现在的问题是获取不到img的属性值
  // 这是为什么呢，语法和上面的都是一样的
  element.addEventListener("click", (event) => {
  });
});

function changeFloatBall(top, left, visibility) {
  Object.values(ball)[0].style.transition = "2s";
  Object.values(ball)[0].style.position = "absolute";
  Object.values(ball)[0].style.top = top;
  Object.values(ball)[0].style.left = left;
  Object.values(ball)[0].style.visibility = visibility;
}

function changeHeaderPosition(left) {
  header1.style.left = left;
}

// --------------- Float Ball -----------
// 这个监测对象不对，还需要添加图片，图片z-linx太高了

// 可能要改变从mouseenter
window.addEventListener("mousemove", (event) => {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop <= "800") {
    changeFloatBall("520px", "-240px", "hiden");
    changeHeaderPosition("700px")
  }
  if (scrollTop > "800" && scrollTop <= "900") {
    changeFloatBall("20px", "-240px", "visible");
    changeHeaderPosition("600px")
  }
  if (scrollTop > "900" && scrollTop <= "1000") {
    changeFloatBall("60px", "-240px", "visible");
    changeHeaderPosition("500px")
  }
  if (scrollTop > "1000" && scrollTop <= "1100") {
    changeFloatBall("90px", "-240px", "visible");
    changeHeaderPosition("400px")
  }
  if (scrollTop > "1100" && scrollTop <= "1200") {
    changeFloatBall("220px", "-240px", "visible");
    changeHeaderPosition("300px")
  }
  if (scrollTop > "1200") {
    changeFloatBall("40px", "-240px", "visible");
    changeHeaderPosition("200px")
  }
});


// 每一个标题都要加入变换，而不是第一个
// nextOfWhatWeDo.addEventListener("click", (event) => {
//   // console.log(event);
//   const title = document.getElementsByName("title").item(0);
//   title.style.transform = 'rotateX(360deg)';
//   // video.style.right = "-500px";
//   // top: 230px;
// // 
// });

