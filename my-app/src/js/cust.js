console.log("testing");
const scrollContainer = document.querySelector(".scroll-drag");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  scrollContainer.classList.add("active");
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mouseup", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 1; // Scroll-fast
  scrollContainer.scrollLeft = scrollLeft - walk;
});






scrollContainer.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("touchend", () => {
  isDown = false;
});

scrollContainer.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 3; // Scroll-fast
  scrollContainer.scrollLeft = scrollLeft - walk;
});
