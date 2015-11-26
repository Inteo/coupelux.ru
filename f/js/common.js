
$(document).ready(function(){

});

$(document).scroll(function(){
  
});

$(function(){
	$(".modal-ham").fancybox({
    type: 'inline',
    wrapCSS: 'ham-popup',
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
});
