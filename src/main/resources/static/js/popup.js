

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

  /* 외부영역 클릭시 팝업 닫기 */
$(document).mouseup(function (e){
	if($(".popup-notice").has(e.target).length === 0){
        popClose('popup-notice-wrap');
        //alert('aaa');
	}else{
        //alert('bbb');
    }
});

  $(document).ready(function(){        
        todayPopOpen('popup-notice-wrap');
  });

  $(document).keydown(function(e){
	//keyCode 구 브라우저, which 현재 브라우저
    var code = e.keyCode || e.which;
 
    if (code == 27) { // 27은 ESC 키번호
        popClose('popup-notice-wrap');
    }
});