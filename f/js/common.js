
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

$(document).ready(function(){
  if ($.browser.mobile) {
    $('body').addClass('mobile');
  }
  $(".input.valid").unbind().blur( function(){
    var id = $(this).attr('id');
    var val = $(this).val();
    switch(id)
    {
      case "r-email":
      case "m-email":
      case "c-email":
      case "s-email":
        var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if(val != '' && rv_email.test(val))
        {
          $(this).addClass('input_success');
          $(this).next().next('.input-error').removeClass("input-error_show");
        }
        else
        {
          $(this).removeClass('input_success').addClass('input_error');
          $(this).next().next('.input-error').addClass("input-error_show")
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
        }
      break;  
      case "m-name":
      case "r-name":
      case "c-name":
      case "s-name":
        var rv_name = /^[a-zA-Zа-яА-Я]+$/;
        if(val.length > 2 && val != '' && rv_name.test(val))
        {
          $(this).addClass('input_success');
          $(this).next().next('.input-error').removeClass("input-error_show");
        }
        else
        {
          $(this).removeClass('input_success').addClass('input_error');
          $(this).next().next('.input-error').addClass("input-error_show")
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
        }
      break;   
      case "r-phone":
      case "m-phone":
      case "c-phone":
      case "s-phone":
        var rv_phone = /^\d+$/;
        if(val.length > 5 && rv_phone.test(val) && val != '')
        {
           $(this).addClass('input_success');
           $(this).next().next('.input-error').removeClass("input-error_show");
        }
        else
        {
          $(this).removeClass('input_success').addClass('input_error');
          $(this).next().next('.input-error').addClass("input-error_show")
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
        }
      break;      
    } 
  }); 
});

$(function(){
	$(".modal-ham").fancybox({
    type: 'inline',
    wrapCSS: 'popup ham-popup',
    fixed: true,
    title: '',
    padding: 0,
    autoResize: false,
    autoCenter: false,
    fitToView: false,
    helpers: {
      overlay: {
        //fixed: false
      }
    }
  });
  $(".modal-inline").fancybox({
    type: 'inline',
    fixed:true,
    wrapCSS: 'popup',
    title: '',
    padding: 0,
    autoResize: false,
    autoCenter: false,
    fitToView: false,
    //scrolling   : 'no',
    helpers: {
      overlay: {
        /*fixed: false*/
      }
    },
    afterLoad: function() {
      var i = this;
      setTimeout(function(){
        i.content.find(".i-monitor__content").addClass("i-monitor__content_active");
        i.content.find(".i-monitor").addClass("i-monitor_active");
      }, 100);
    },
    beforeClose: function() {
      this.content.find(".i-monitor__content").removeClass("i-monitor__content_active");
      this.content.find(".i-monitor").removeClass("i-monitor_active");
      $(".i-monitor__content").removeClass("i-monitor__content_done");
      $(".i-monitor__text-done").remove();
      $('.i-monitor__text').animate({opacity: 1}, 100);
      var th = this.content;
      th.find(".form-thx").animate({opacity: 0}, 100, function(){
        th.find(".form").css("display", "block").animate({opacity: 1}, 300);
      });
    }
  });
  $(".form-reset").click(function(){
    var th = $(this);
    th.closest(".popup").find(".i-monitor__content").removeClass("i-monitor__content_active");
    if($(".scheme .switcher__control button.active").data("switcher-btn") != "scheme-cont01") {
      $(".scheme .i-monitor").removeClass("i-monitor_active");
    }
    th.closest(".scheme-slide").find(".i-monitor__content").removeClass("i-monitor__content_active");
    th.closest(".scheme-slide").find(".i-monitor").removeClass("i-monitor_active");
    $(".i-monitor__content").removeClass("i-monitor__content_done");
    $(".i-monitor__text-done").remove();
    $('.i-monitor__text').animate({opacity: 1}, 100);
    
    th.closest(".popup").find(".form-thx").animate({opacity: 0}, 100, function(){
      th.closest(".popup").find(".form").css("display", "block").animate({opacity: 1}, 300);
      $(this).hide();
    });
    th.closest(".scheme-slide").find(".form-thx").animate({opacity: 0}, 100, function(){
      
      $(this).hide();
    });
    th.closest(".screen__illustration-cell").find(".form").css("display", "block").animate({opacity: 1}, 300);
    $(".scheme-slide").removeClass("scheme-slide_form");
    $(".scheme .i-monitor__content").removeClass("i-monitor__content_active");
    if($(".scheme .switcher__control button.active").data("switcher-btn") != "scheme-cont01") {
      
      $(".scheme .i-monitor").removeClass("i-monitor_active");
    }
    $(".form-thx").hide();
    $(".btn-file").removeClass("btn-file_active").find("span").text("Прикрепить файл");
    $.fancybox.close();
    return false;
  });
  $(".form-done").click(function(){
    if($(this).hasClass("form-done_disable")) {
      return false;
    }
    $(".i-monitor__content").addClass("i-monitor__content_done");
    $('.i-monitor__text').animate({opacity: 0}, 100);
    var dText = "Заявка успешно отправлена";
    if($(this).closest(".popup").hasClass("consult-popup")) {
      dText = "Вопрос успешно отправлен";
    }
    $('.i-monitor__text').after("<p class='i-monitor__text i-monitor__text-done' style='margin-top: -52px; opacity: 0;'>" + dText + "</p>");
    $(".i-monitor__text-done").animate({opacity: 1}, 200);
    var th = $(this);
    th.closest(".form").animate({opacity: 0}, 200, function(){
      $(this).hide();
      th.parents().find(".form-thx").css("display", "block").animate({opacity: 1}, 300);
    });    
    return false;
  });
  $("[data-scrollto]").click(function(){
    var scrollto = $(this).data('scrollto');
    $.scrollTo('.'+scrollto, 800);
    return false;
  });

  $(".switcher__control button").click(function(){
    var i = $(this).data("switcher-btn");
    $(this).closest(".switcher__control").find("button").removeClass("active");
    $(this).addClass("active");
    $(this).closest(".switcher").find(".switcher__content").removeClass("switcher__content_active");
    $(this).closest(".switcher").find(".switcher__content" + "#" + i).addClass("switcher__content_active");
  });
});
