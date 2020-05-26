function collision($div1, $div2) {
	var x1 = $div1.offset().left;
	var y1 = $div1.offset().top;
	var h1 = $div1.outerHeight(true);
	var w1 = $div1.outerWidth(true);
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	var x2 = $div2.offset().left;
	var y2 = $div2.offset().top;
	var h2 = $div2.outerHeight(true);
	var w2 = $div2.outerWidth(true);
	var b2 = y2 + h2;
	var r2 = x2 + w2;

	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	return true;
}

var sprite = $(".sprite");
var ground = $(".ground");
var spriteTop = $(".sprite").position().top;
var pause = false

var zwaartekracht = window.setInterval(
  function()
  {
		if (!pause) {
			if( collision( sprite, ground) == false)
			{
				spriteTop += 2;
				$(".sprite").css('top', spriteTop)
			}
		}
}, 10);

$(document).keydown
(
  function(e) {
    switch (e.keyCode) {
      case 32:
      pause = true;
      $(".sprite").animate({top: "-=50"});
			pause = false;
        break;
      default:
      return;
    }
  }
);
