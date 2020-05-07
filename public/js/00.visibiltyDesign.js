// ---------------- Test the Position ----------------
const getElementViewPosition2 = (element) => {
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

// Reset Visibility Function
const Reset = (element) => {
  element.style.opacity = 1;
  element.style.visibility = "visible";
};

const SetAttributes = (element, opacity, visibility, transition) => {
  element.style.opacity = opacity;
  element.style.visibility = visibility;
  element.style.transition = transition;
};

const gallery = document.getElementById("gallery");
const navbar = document.getElementById("navigation");
const whatwedo = document.getElementById("what-we-do");
const imageWallLocal = document.getElementById("image-wall");
const whatwedocontainer = document.getElementsByClassName(
  "whatwedo-container"
)[0];

// ---------- Reset Visibility on Medium Screen Size ------------
window.addEventListener("resize", (event) => {
  let currentSize = document.documentElement.clientWidth;

  if (currentSize < 992) {
    Reset(navbar);
    Reset(gallery);
    Reset(whatwedo);
    Reset(whatwedocontainer);
    Reset(imageWallLocal);
    imageWallLocal.style.zIndex = "1"
    imageWallLocal.style.backgroundImage = "none"
  } 
});

// ------------------ Gallery Visibility ----------------

window.addEventListener("scroll", function (e) {
  let currentSize = document.documentElement.clientWidth;
  let galleryTop = getElementViewPosition2(gallery).y;

  
  if (currentSize >= 992) {
    if ( -500 <= galleryTop <= -100) {
      SetAttributes(navbar, 0, "hidden", "1s");
      SetAttributes(gallery, 1, "visible", "2s");
    } else {
      SetAttributes(gallery, 0, "hidden", "1s");
      SetAttributes(navbar, 1, "visible", "2s");
    }
  }
});

// ------------------ What We Do Visibility ----------------
window.addEventListener("scroll", function (e) {
  let whatwedoTop = getElementViewPosition2(whatwedo).y;
  let currentSize = document.documentElement.clientWidth;

  if (currentSize >= 992) {
    if (whatwedoTop < -800) {
      SetAttributes(gallery, 0, "hidden", "1s");
      SetAttributes(whatwedo, 1, "visible", "2s");
    } else {
      SetAttributes(whatwedo, 0, "hidden", "1s");
      SetAttributes(gallery, 1, "visible", "2s");
    }
  }
});

//  ------------------ Image Wall Visibility ----------------
window.addEventListener("scroll", function (e) {
  let imageWallLocalTop = getElementViewPosition2(imageWallLocal).y;
  let currentSize = document.documentElement.clientWidth;
  // console.log(currentSize);

  if (currentSize >= 992) {
    if (imageWallLocalTop < -1880) {
      // 应该是这里
      // SetAttributes(gallery, 0, "hidden", "1s");
      SetAttributes(whatwedo, 0, "hidden", "1s");
      SetAttributes(imageWallLocal, 1, "visible", "2s");
      imageWallLocal.style.backgroundImage =
        "linear-gradient(to bottom right, #e4f5b5b2, #0aaafa79)";
    } else {
      SetAttributes(imageWallLocal, 0, "hidden", "1s");
      SetAttributes(whatwedo, 1, "visible", "2s");
      imageWallLocal.style.backgroundImage = "none";
    }
  }
});
