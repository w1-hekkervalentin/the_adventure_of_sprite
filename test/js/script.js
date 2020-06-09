// var sprite = $(".sprite");
// var ground = $(".ground");
// var spriteTop = $(".sprite").position().top;
// var pause = false
var lastKey

$(document).keydown(function(e) {
    // naar rechts
    if(e.keyCode == 39) {
      if ($(".sprite").attr("src") != "../Assets/Characters/The Hero/Walk/Walk.gif") {
        $(".sprite").attr("src","../Assets/Characters/The Hero/Walk/Walk.gif")
      }
      $(".sprite").css({left: "+=5", transform: "scaleX(1)"});
      lastKey = e.keyCode;
    }
    // naar links
    if(e.keyCode == 37) {
      if ($(".sprite").attr("src") != "../Assets/Characters/The Hero/Run/Run.gif") {
        $(".sprite").attr("src","../Assets/Characters/The Hero/Run/Run.gif")
      }
      $(".sprite").css({left: "-=5", transform: "scaleX(-1)"});
      lastKey = e.keyCode;
    }
    // springen
    if(e.keyCode == 32) {
      if (lastKey == 39) {
        $(".sprite").attr("src","../Assets/Characters/The Hero/Jump/Jump.gif")
        $(".sprite").animate({left: "+=25", top: "-=150", left: "+=50"})
      }
      else if (lastKey == 37) {
        $(".sprite").attr("src","../Assets/Characters/The Hero/Jump/Jump.gif")
        $(".sprite").animate({left: "-25", top: "-=150", left: "-=50"})

      }
      else {
        $(".sprite").attr("src","../Assets/Characters/The Hero/Jump/Jump.gif")
        $(".sprite").animate({ top: "-=150"});
      }
    }
  }
);
$(document).keyup(function() {
  setTimeout(
  function()
  {
    $(".sprite").attr("src","../Assets/Characters/The Hero/Idle/Idle.gif")
  }, 900);

});
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
