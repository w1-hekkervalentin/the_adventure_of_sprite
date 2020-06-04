// var sprite = $(".sprite");
// var ground = $(".ground");
// var spriteTop = $(".sprite").position().top;
// var pause = false

$(document).keydown
(
  function(e) {
    // switch (e.keyCode) {
    //   case 32:
    //   // springen
    //   $(".sprite").animate({top: "-=150"});
    //     break;
    //   case 39:
    //   // naar rechts
    //   $(".sprite").css({left: "+=10"});
    //     break;
    //   case 37:
    //   // naar links
    //   $(".sprite").css({left: "-=10"});
    //     break;
    //   default:
    //   return;
    // }
    if(e.keyCode == 39) {
      $(".sprite").animate({left: "+=10"});
    }
    if(e.keyCode == 37) {
      $(".sprite").animae({left: "-=10"});
    }
    if(e.keyCode == 32) {
      $(".sprite").animate({top: "-=150"});
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
