// var sprite = $(".sprite");
// var ground = $(".ground");
// var spriteTop = $(".sprite").position().top;
// var pause = false
var lastKey

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


    // naar rechts
    if(e.keyCode == 39) {
      $(".sprite").css({left: "+=5", transform: "scaleX(1)"});
      lastKey = e.keyCode;
    }
    // naar links
    if(e.keyCode == 37) {
      $(".sprite").css({left: "-=5", transform: "scaleX(-1)"});
      lastKey = e.keyCode;
    }
    // springen
    if(e.keyCode == 32) {
      if (lastKey == 39) {
        console.log(lastKey);
        $(".sprite").animate({left: "+=25", top: "-=150", left: "+=50"});
      }
      else if (lastKey == 37) {
        console.log(lastKey);
        $(".sprite").animate({left: "-=25", top: "-=150", left: "-=50"});
      }
      else {
        $(".sprite").animate({ top: "-=150"});
      }
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
    }, 25);
})();
