
$(function () {

    var $items = $('.item');

    $items.mouseover(function () {

      $(this).children('ul').show();
    });

    $items.mouseout(function () {
      $(this).children('ul').hide();
    });
  });