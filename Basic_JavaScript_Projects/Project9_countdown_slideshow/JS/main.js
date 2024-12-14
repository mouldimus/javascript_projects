let slideIndex = 1;
showSlides(slideIndex);

function countdown() {
  let seconds = document.getElementById("seconds").value;
  seconds = Number(seconds);
  if (isNaN(seconds)) {
    alert("Please input number of seconds");
    document.getElementById("seconds").value = "";
    return;
  }
  let intervalId = setInterval(() => plusSlides(1), seconds * 1000);
  let slides = document.getElementsByClassName("myslides");
  setTimeout(
    () => {
      clearInterval(intervalId);
    },
    seconds * slides.length * 1000,
  );
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  console.log("slideIndex: " + slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}