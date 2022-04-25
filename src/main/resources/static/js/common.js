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