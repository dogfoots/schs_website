$(window).on('load', function() {
    //menu_hover_effect();
    submenu_init();
});

function submenu_init(){
    var $menu = $('#menu');

    $menu.find('> li').hover(function(){
        $("body").addClass("menu_open");
        $("#menu .submenu-fulldown").removeClass("focus");


        $(this).find(".submenu-fulldown").addClass("focus");
        $(this).find(".submenu-fulldown").css("display", "block");
        
        $(this).find(".submenu-list").css("padding-left", ($(this).position().left-($(this).width()/2))+"px");

    }, function() {
        $(this).find(".submenu-fulldown").css("display", "none");
        $("#menu .submenu-fulldown").removeClass("focus");
        $("body").removeClass("menu_open");
    });
   
    $menu.find('> li').each(function(index, item){
        $(this).find(".submenu-list").css("padding-left", ($(item).position().left-($(item).width()/2))+"px");
    });
    
}

// gnb menu hover setting 메뉴 위치로 bar 이동시킴. 쓰지는 않더라.
function menu_hover_effect(){

    var $menu_nav = $('.menu_container');
    var $menu = $('#menu');
    var $current = null;
    var flag = true;
	var menu_width = $('#menu > li').find('a').outerWidth()

    /* add menu line markup via javascript */
    $menu_nav.append('<div id="menu_line"></div>');
    var $menu_line = $('#menu_line');

    /* check current menu */
    if($menu.find('> li.current-menu-item').length > 0) {
        $current = $menu.find('> li.current-menu-item');
    } else if(($menu.find('> li.current-menu-ancestor').length > 0)) {
        $current = $menu.find('> li.current-menu-ancestor');
    } else {
        flag = false; // not current menu
    }

    /* menu line setting */
    gnb_hover_effect_pos();

    $(window).on({
        resize : function(){
            gnb_hover_effect_pos();
        }
    });

    /* hover effect */
    $menu.find('> li').hover(function(){
        var leftPos = $(this).position().left;

        if(flag){
            $menu_line.stop().animate({
                left: leftPos,
				width: menu_width,
            });
        } else {
            $menu_line.stop().animate({
                opacity: 1,
                left: leftPos,
				width : menu_width
            });
        }
    }, function() {
        if(flag){
            $menu_line.stop().animate({
                left: $menu_line.data("origLeft")
            });
        } else {
            $menu_line.stop().animate({
                opacity: 0
            });
        }
    });

    /* line position setting */
    function gnb_hover_effect_pos(){
        if(flag){
            var dump_left = $current.position().left;
            $menu_line.css({"left": dump_left, "width": menu_width})
                      .data("origLeft", dump_left);
        } else {
            $menu_line.css("opacity", 0)
                      .css("left", 0);
        }
    }

}


function notAvailableService(){
    alert("준비중입니다.");
}


function goTop(){
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}


// 쿠키 가져오기  
function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
      var y = (x + nameOfCookie.length);
      if (document.cookie.substring(x, y) == nameOfCookie) {
        if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
          endOfCookie = document.cookie.length;
        return unescape(document.cookie.substring(y, endOfCookie));
      }
      x = document.cookie.indexOf(" ", x) + 1;
      if (x == 0)
        break;
    }
    return "";
  }

  // 24시간 기준 쿠키 설정하기  
  // 만료 후 클릭한 시간까지 쿠키 설정  
  function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
  }
  
  // 창열기  
  function todayPopOpen(winName) {
    var blnCookie = getCookie(winName);
    //var obj = eval("window." + winName);
    //console.log(blnCookie);
    if (!blnCookie) {
        $("#"+winName).show();
      //obj.style.display = "block";
    } else {
        $("#"+winName).hide();
      //obj.style.display = "none";
    }
  }
  // 창닫기  
  function todayPopClose(winName, expiredays) {
    setCookie(winName, "expire", expiredays);
    $("#"+winName).hide();
    //var obj = eval("window." + winName);
    //obj.style.display = "none";
  }

  function popClose(winName){
    //var obj = eval("window." + winName);
    $("#"+winName).hide();
    //obj.style.display = "none";
  }

  $(document).ready(function(){
        $("#popup-notice-wrap").on("click",function(){
            popClose('popup-notice-wrap');
        });

        $(".popup-notice").on("click",function(){

        });
        
        todayPopOpen('popup-notice-wrap');
  });