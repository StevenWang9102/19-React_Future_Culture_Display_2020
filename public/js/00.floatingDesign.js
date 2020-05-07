// ---------------- Test the Position ----------------
const getElementViewPosition3 = (element) => {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft + current.clientLeft;
    current = current.offsetParent;
  }
  let elementScrollLeft = 0;
  if (document.compatMode === "BackCompat") {
    elementScrollLeft = document.body.scrollLeft;
  } else {
    elementScrollLeft = document.documentElement.scrollLeft;
  }
  let left = actualLeft - elementScrollLeft;

  let actualTop = element.offsetTop;

  current = element.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop + current.clientTop;
    current = current.offsetParent;
  }
  let elementScrollTop = 0;
  if (document.compatMode === "BackCompat") {
    elementScrollTop = document.body.scrollTop;
  } else {
    elementScrollTop = document.documentElement.scrollTop;
  }
  let right = actualTop - elementScrollTop;
  return { x: left, y: right };
};
// --------------------- Gallery Floating ------------------
const columnL = document.getElementsByClassName("column-one")[0];
const columnR = document.getElementsByClassName("column-two")[0];
const galleryLocal = document.getElementById("gallery");

window.addEventListener("scroll", function (e) {
  let galleryTop = getElementViewPosition3(galleryLocal).y;
  let currentSize = document.documentElement.clientWidth;
  if (currentSize >= 992) {
    if (galleryTop < -100) {
      columnL.style.marginTop = "0";
      columnR.style.marginTop = "0";
    } else {
      columnL.style.marginTop = "50px";
      columnR.style.marginTop = "50px";
    }
  }
});

// --------------- What We Do Floating -----------------
const whatwedoColumnOne = document.getElementsByClassName("first-column")[0];
const whatwedoColumnTwo = document.getElementsByClassName("second-column")[0];
const whatwedoLocal5 = document.getElementById("what-we-do");

window.addEventListener("scroll", function (e) {
  let whatwedoLocalTop = getElementViewPosition3(whatwedoLocal5).y;
  let currentSize = document.documentElement.clientWidth;
  if (currentSize >= 992) {
    if (whatwedoLocalTop < -960) {
      whatwedoColumnOne.style.marginTop = "0";
      whatwedoColumnTwo.style.marginTop = "0";
    } else {
      whatwedoColumnOne.style.marginTop = "50px";
      whatwedoColumnTwo.style.marginTop = "50px";
    }
  }
});

// --------------- Image Wall Floating ---------------------
const columnLeft = document.getElementsByClassName("container-up")[0];
const columnRight = document.getElementsByClassName("container-up")[1];
const imageWallLocal2 = document.getElementById("image-wall");

window.addEventListener("scroll", function (e) {
  let imageWallTop = getElementViewPosition3(imageWallLocal2).y;
  let currentSize = document.documentElement.clientWidth;
  if (currentSize >= 992) {
    if (imageWallTop < -1810) {
      columnLeft.style.marginTop = "0";
      columnRight.style.marginTop = "0";
    } else {
      columnLeft.style.marginTop = "50px";
      columnRight.style.marginTop = "50px";
    }
  }
});
