$(function(){

  $('.header__menu-burger, .header__menu-list').on('click', function(){
    $('.header__menu-burger').toggleClass('active');
  });

  $('.header__menu-burger, .header__menu-list').click( function(){
      $('.header__menu-list').slideToggle();
    });

  });