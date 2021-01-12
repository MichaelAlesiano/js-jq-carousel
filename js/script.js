$(document).ready(function(){

  $('.next').click(clickNext);
  $('.prev').click(clickPrev);

  $(document).keydown(function(e){
    if (e.which == 39) {
     clickNext();
    }
    if (e.which == 37) {
      clickPrev();
     }
  });

  $('.nav i').click(function(){
    $('.nav i.active').removeClass('active');
    $(this).addClass('active');
    $('.images img').removeClass('active');
    $('.images img').eq($(this).index()).addClass('active');
  });

});


function clickNext(){

  var activeImg = $('.images img.active');
  var activeDot = $('.nav i.active');

  activeImg.removeClass('active');
  activeImg.next().addClass('active');

  activeDot.removeClass('active');
  activeDot.next().addClass('active');

  if(activeImg.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}

function clickPrev(){

  var activeImg = $('.images img.active');
  var activeDot = $('.nav i.active');

  activeImg.removeClass('active');
  activeImg.prev().addClass('active');

  activeDot.removeClass('active');
  activeDot.prev().addClass('active');

  if(activeImg.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }

}
