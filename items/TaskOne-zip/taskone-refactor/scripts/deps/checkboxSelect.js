
define(['jquery','data','renderHTML'],function ($,data,renderHTML) {
          /**
           * 实现全选,反选和单选功能
           */
          $("#checkAllorCaner").on('click', function () {

              if ($(this).hasClass('checkbox-selector-bg')) {
                  $(".checkbox").removeClass("checkbox-selector-bg");
                  $('ul.nav').children('li.nav-item-del').fadeOut(500);
              } else {
                  $(".checkbox").addClass("checkbox-selector-bg");
                  $('ul.nav').children('li.nav-item-del').fadeIn(500);
              }
          });

          $("#container").on('click', '.single-check', function () {
              //console.log($(this));
              if ($(this).hasClass('checkbox-selector-bg')) {
                  $(this).removeClass('checkbox-selector-bg');
                  $('ul.nav').children('li.nav-item-del').fadeOut(500);
              } else {
                  $(this).addClass('checkbox-selector-bg');
                  $('ul.nav').children('li.nav-item-del').fadeIn(500);
              }

          })
});