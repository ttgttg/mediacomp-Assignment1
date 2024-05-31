const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.remove();
      window.addEventListener("scroll", handleAlert);
      handleAlert();
    }, 2500);
  });
}
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    setTimeout(() => {
      header.classList.add("sticky");
    }, 200);
  } else {
    setTimeout(() => {
      header.classList.remove("sticky");
    }, 200);
  }
});

function handleAlert() {
  const targetElements = document.querySelectorAll(".slide-up");
  targetElements.forEach((element) => {
    if (!element.classList.contains("alerted") && isInViewport(element)) {
      setTimeout(() => {
        element.classList.add("alerted");
      }, 200);
    }
  });
  const targetElementsLeft = document.querySelectorAll(".slide-left");
  targetElementsLeft.forEach((element) => {
    if (!element.classList.contains("alerted") && isInViewport(element)) {
      setTimeout(() => {
        element.classList.add("alerted");
      }, 200);
    }
  });
  const targetElementsRight = document.querySelectorAll(".slide-right");
  targetElementsRight.forEach((element) => {
    if (!element.classList.contains("alerted") && isInViewport(element)) {
      setTimeout(() => {
        element.classList.add("alerted");
      }, 200);
    }
  });
}
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
