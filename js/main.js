var cartslideIndex = 1;
showCartSlides(cartslideIndex);
var flslideIndex = 1;
showFlSlides(flslideIndex);
var vbslideIndex = 1;
showVbSlides(vbslideIndex);
var hmslideIndex = 1;
showHmSlides(hmslideIndex);
var pgslideIndex = 1;
showPgSlides(pgslideIndex);
var mmmslideIndex = 1;
showMmmSlides(mmmslideIndex);


// Next/previous controls
function plusCartSlides(n) {
  showCartSlides(cartslideIndex += n);
}

function plusFlSlides(n) {
  showFlSlides(flslideIndex += n);
}

function plusVbSlides(n) {
  showVbSlides(vbslideIndex += n);
}

function plusHmSlides(n) {
  showHmSlides(hmslideIndex += n);
}

function plusPgSlides(n) {
  showPgSlides(pgslideIndex += n);
}

function plusMmmSlides(n) {
  showMmmSlides(mmmslideIndex += n);
}


function showCartSlides(n) {
  var i;
  var cart_slides = document.getElementsByClassName("cartogram_slides");
  var cart_captionText = document.getElementById("capcarto");
  if (n > cart_slides.length) {cartslideIndex = 1}
  if (n < 1) {cartslideIndex = cart_slides.length}
  for (i = 0; i < cart_slides.length; i++) {
    cart_slides[i].style.display = "none";
  }
  cart_slides[cartslideIndex-1].style.display = "block";
  cart_captionText.innerHTML = "Dorling's Cartogram";
}

function showFlSlides(n) {
  var i;
  var fl_slides = document.getElementsByClassName("flights_slides");
  var fl_captionText = document.getElementById("capflights");
  if (n > fl_slides.length) {flslideIndex = 1}
  if (n < 1) {flslideIndex = fl_slides.length}
  for (i = 0; i < fl_slides.length; i++) {
    fl_slides[i].style.display = "none";
  }
  fl_slides[flslideIndex-1].style.display = "block";
  //fl_captionText.innerHTML = "2";
}

function showVbSlides(n) {
  var i;
  var vb_slides = document.getElementsByClassName("vdbscan_slides");
  var vb_captionText = document.getElementById("capvdbscan");
  if (n > vb_slides.length) {vbslideIndex = 1}
  if (n < 1) {vbslideIndex = vb_slides.length}
  for (i = 0; i < vb_slides.length; i++) {
    vb_slides[i].style.display = "none";
  }
  vb_slides[vbslideIndex-1].style.display = "block";
  //vb_captionText.innerHTML = "3";
}

function showHmSlides(n) {
  var i;
  var hm_slides = document.getElementsByClassName("hmobility_slides");
  var hm_captionText = document.getElementById("caphmob");
  if (n > hm_slides.length) {hmslideIndex = 1}
  if (n < 1) {hmslideIndex = hm_slides.length}
  for (i = 0; i < hm_slides.length; i++) {
    hm_slides[i].style.display = "none";
  }
  hm_slides[hmslideIndex-1].style.display = "block";
  //hm_captionText.innerHTML = "4";
}

function showPgSlides(n) {
  var i;
  var pg_slides = document.getElementsByClassName("powergrid_slides");
  var pg_captionText = document.getElementById("cappower");
  if (n > pg_slides.length) {pgslideIndex = 1}
  if (n < 1) {pgslideIndex = pg_slides.length}
  for (i = 0; i < pg_slides.length; i++) {
    pg_slides[i].style.display = "none";
  }
  pg_slides[pgslideIndex-1].style.display = "block";
  //pg_captionText.innerHTML = "5";
}

function showMmmSlides(n) {
  var i;
  var mmm_slides = document.getElementsByClassName("mmm_slides");
  var mmm_captionText = document.getElementById("capmmm");
  if (n > mmm_slides.length) {mmmslideIndex = 1}
  if (n < 1) {mmmslideIndex = mmm_slides.length}
  for (i = 0; i < mmm_slides.length; i++) {
    mmm_slides[i].style.display = "none";
  }
  mmm_slides[mmmslideIndex-1].style.display = "block";
  //mmm_captionText.innerHTML = "6";
}
