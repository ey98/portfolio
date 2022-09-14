
const SLIDES = $(".slides > .slide");

/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".slides > .slide:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  let prevNum = SLIDES.index($(".slides > .slide:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let currentSlide = SLIDES.eq(num - 1);
  SLIDES.addClass("hidden")
  currentSlide.removeClass("hidden")
}

$("#next").click(function() {
  nextSlide();
});

$("#previous").click(function() {
  prevSlide();
});
