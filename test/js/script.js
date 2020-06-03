// var sprite = $(".sprite");
// var ground = $(".ground");
// var spriteTop = $(".sprite").position().top;
// var pause = false

$(document).keydown
(
  function(e) {
    switch (e.keyCode) {
      case 32:
      $(".sprite").animate({top: "-=150"});
        break;
      case 39:
      $(".sprite").css({left: "+=10"});
        break;
      case 37:
      $(".sprite").css({left: "-=10"});
        break;
      default:
      return;
    }
  }
);
(function() {
    var gravity = $('.gravity'),
        obstacle = $('.obstacle');
    var all = gravity.add(obstacle);
    setInterval(function() {
        gravity.each(function() {
            var e = this,
                g = $(this),
                ypos = g.offset().top,
                xpos = g.offset().left,
                h = g.height(),
                w = g.width();
            var conflicts = false;
            all.each(function() {
                if(this === e) return;
                var a = $(this);
                if(xpos < a.offset().left + a.width() && xpos + w > a.offset().left) {
                    if(ypos + h > a.offset().top && ypos + h < a.offset().top + a.height()) {
                         conflicts = true;
                    }
                }
            });
            if(!conflicts) {
                g.css('top', g.offset().top + 10);
            }
        });
    }, 50);
})();
