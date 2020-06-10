
var playerDead = false
var lastKey

function respawn() {
  $(".sprite").css('left', '50px');
  $(".sprite").css('top', '1px');
  $(".MainMenu").fadeOut();
};

setInterval
(
    function()
    {
        var Element1 = $(".sprite");
        var Element2 = $("death");
        var Element3 = $("win");

        if( collision( Element1, Element2) == true)
        {
          $(".sprite").attr("src","../Assets/Characters/The Hero/Dead/Dead.gif");
          respawn();
          console.log("test");
        }

        if( collision(Element1, Element3) == true) {
            $(".MainMenu").fadeIn();
            console.log("test");
        }
    }, 100);

  $(document).keydown(function(e) {
      // naar rechts
      if(e.keyCode == 68) {
        if ($(".sprite").attr("src") != "../Assets/Characters/The Hero/Walk/Walk.gif") {
          $(".sprite").attr("src","../Assets/Characters/The Hero/Walk/Walk.gif")
        }
        $(".sprite").css({left: "+=5", transform: "scaleX(1)"});
        lastKey = e.keyCode;
      }
      // naar links
      if(e.keyCode == 65) {
        if ($(".sprite").attr("src") != "../Assets/Characters/The Hero/Run/Run.gif") {
          $(".sprite").attr("src","../Assets/Characters/The Hero/Run/Run.gif")
        }
        $(".sprite").css({left: "-=5", transform: "scaleX(-1)"});
        lastKey = e.keyCode;
      }
      // springen
      if(e.keyCode == 32) {
        if (lastKey == 68) {
          $(".sprite").attr("src","../Assets/Characters/The Hero/Jump/Jump.gif")
          $(".sprite").animate({left: "+=110", top: "-=150", left: "+=160"})
          lastKey = "";
        }
        else if (lastKey == 65) {
          $(".sprite").attr("src","../Assets/Characters/The Hero/Jump/Jump.gif")
          $(".sprite").animate({left: "-110", top: "-=150", left: "-=160"})
          lastKey = "";
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




// Checks for collisions
function collision($div1, $div2)
{
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

//GUI CODE
$("#startButton").click(function(){
  $(".MainMenu").fadeOut();
});

// function startLevel() {
//   window.location.href = "../test/levels/Wereld_1/Lvl1.html";
// };
