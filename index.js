//move object while mouse is hovering
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".graphicShape").forEach((graphicShape) => {
    let moveValue = graphicShape.getAttribute("data-value");
    let x = (e.clientX * moveValue) / 200;
    let y = (e.clientY * moveValue) / 200;

    graphicShape.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}