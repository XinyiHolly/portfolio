var cartslideIndex = 1;
showCartSlides(cartslideIndex);
var cartplusslideIndex = 1;
showCartplusSlides(cartplusslideIndex);
var flslideIndex = 1;
showFlSlides(flslideIndex);
var iprslideIndex = 1;
showIprSlides(iprslideIndex);
// var vbslideIndex = 1;
// showVbSlides(vbslideIndex);
// var hmslideIndex = 1;
// showHmSlides(hmslideIndex);
var pgslideIndex = 1;
showPgSlides(pgslideIndex);
var mmmslideIndex = 1;
showMmmSlides(mmmslideIndex);

// Next/previous controls
function plusCartSlides(n) {
  if (cartslideIndex == 4) {
    if (n>0)
      document.getElementById("capcarto").innerHTML = "<small>Spatial squares produced in Python</small>";      
  }
  if (cartslideIndex == 5) {
    if (n<0)
      document.getElementById("capcarto").innerHTML = "<small>Spatial bubble chart produced in Python</small>";
  }
  if (cartslideIndex == 7) {
    if (n>0)
      document.getElementById("capcarto").innerHTML = "<small>Spatial bubble chart produced in Python</small>";      
  }
  if (cartslideIndex == 1) {
    if (n<0)
      document.getElementById("capcarto").innerHTML = "<small>Spatial squares produced in Python</small>";
  }
  showCartSlides(cartslideIndex += n);
}

function plusCartplusSlides(n) {
  var country = document.getElementById("country").innerHTML;
  if (country == "Switzerland Map") {
    if (n<0)
      document.getElementById("country").innerHTML = "USA in Squares";  
    else 
      document.getElementById("country").innerHTML = "China Map and the Cartogram Tool";
  }
  if (country == "China Map and the Cartogram Tool") {
    if (n<0)
      document.getElementById("country").innerHTML = "Switzerland Map";
    else
      document.getElementById("country").innerHTML = "China in Circles";
  }
  if (country == "China in Circles") {
    if (n<0)
      document.getElementById("country").innerHTML = "China Map and the Cartogram Tool";
    else
      document.getElementById("country").innerHTML = "China in Squares";
  }
  if (country == "China in Squares") {
    if (n<0)
      document.getElementById("country").innerHTML = "China in Circles";
    else
      document.getElementById("country").innerHTML = "USA Map";
  }
  if (country == "USA Map") {
    if (n<0)
      document.getElementById("country").innerHTML = "China in Squares";
    else
      document.getElementById("country").innerHTML = "USA in Circles";
  }
  if (country == "USA in Circles") {
    if (n<0)
      document.getElementById("country").innerHTML = "USA Map";
    else
      document.getElementById("country").innerHTML = "USA in Squares";
  }
  if (country == "USA in Squares") {
    if (n<0)
      document.getElementById("country").innerHTML = "USA in Circles";
    else
      document.getElementById("country").innerHTML = "Switzerland Map";
  }
  showCartplusSlides(cartplusslideIndex += n);
}

function plusFlSlides(n) {
  showFlSlides(flslideIndex += n);
}

function plusIprSlides(n) {
  showIprSlides(iprslideIndex += n);
}

// function plusVbSlides(n) {
//   showVbSlides(vbslideIndex += n);
// }

// function plusHmSlides(n) {
//   showHmSlides(hmslideIndex += n);
// }

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
}

function showCartplusSlides(n) {
  var i;
  var cartplus_slides = document.getElementsByClassName("cartplus_slides");
  var cartplus_captionText = document.getElementById("capcartplus");
  if (n > cartplus_slides.length) {cartplusslideIndex = 1}
  if (n < 1) {cartplusslideIndex = cartplus_slides.length}
  for (i = 0; i < cartplus_slides.length; i++) {
    cartplus_slides[i].style.display = "none";
  }
  cartplus_slides[cartplusslideIndex-1].style.display = "block";
  //cartplus_captionText.innerHTML = "<small>Spatial bablechart showing Switzerland, produced in Python</small>"; 
}

function showFlSlides(n) {
  var i;
  var fl_slides = document.getElementsByClassName("flight_slides");
  var fl_captionText = document.getElementById("capflight");
  if (n > fl_slides.length) {flslideIndex = 1}
  if (n < 1) {flslideIndex = fl_slides.length}
  for (i = 0; i < fl_slides.length; i++) {
    fl_slides[i].style.display = "none";
  }
  fl_slides[flslideIndex-1].style.display = "block";
  //fl_captionText.innerHTML = "";
}

function showIprSlides(n) {
  var i;
  var ipr_slides = document.getElementsByClassName("ipr_slides");
  var ipr_captionText = document.getElementById("capipr");
  if (n > ipr_slides.length) {iprslideIndex = 1}
  if (n < 1) {iprslideIndex = ipr_slides.length}
  for (i = 0; i < ipr_slides.length; i++) {
    ipr_slides[i].style.display = "none";
  }
  ipr_slides[iprslideIndex-1].style.display = "block";
  //ipr_captionText.innerHTML = "";
}

// function showVbSlides(n) {
//   var i;
//   var vb_slides = document.getElementsByClassName("mdbscan_slides");
//   var vb_captionText = document.getElementById("capmdbscan");
//   if (n > vb_slides.length) {vbslideIndex = 1}
//   if (n < 1) {vbslideIndex = vb_slides.length}
//   for (i = 0; i < vb_slides.length; i++) {
//     vb_slides[i].style.display = "none";
//   }
//   vb_slides[vbslideIndex-1].style.display = "block";
//   //vb_captionText.innerHTML = "3";
// }

// function showHmSlides(n) {
//   var i;
//   var hm_slides = document.getElementsByClassName("hmobility_slides");
//   var hm_captionText = document.getElementById("caphmob");
//   if (n > hm_slides.length) {hmslideIndex = 1}
//   if (n < 1) {hmslideIndex = hm_slides.length}
//   for (i = 0; i < hm_slides.length; i++) {
//     hm_slides[i].style.display = "none";
//   }
//   hm_slides[hmslideIndex-1].style.display = "block";
//   //hm_captionText.innerHTML = "4";
// }

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


