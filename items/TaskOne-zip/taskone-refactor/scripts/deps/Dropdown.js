/**
 * 列表滑动效果
 */
define(['jquery', 'renderHTML'], function ($, renderHTML) {

    $('.nav').on('mouseenter', 'li', function () {
        $(this).children('ul').stop(true).slideDown(500);
        $(this).children('div').stop(true).fadeIn(500);
    }).on('mouseleave', 'li', function () {
        $(this).children('ul').stop(true).slideUp(500);
        $(this).children('div').stop(true).fadeOut(500);
        $('.input-value').val('');
    });


    $('.select-button').click(function () {
        $(this).css({
            "background-color": "#d3d3d3",
            "color": "#000",
            "box-shadow": "0 0 10px #e0e0e0 inset"
        });
        $(this).next('ul').stop(true).slideToggle(100);

    });

    $('.pagin-left').on('click', 'li', function () {
        var activeShowItemCount = $(this).children('a').html(); //获取要显示个数的数值
        $('.select-button').html(activeShowItemCount);
        $('.select-option').fadeOut(300);
        pageFunction(activeShowItemCount);
    })

    //function Dropdown( param ){
    //    this.data = param.data;
    //
    //    this.init();
    //}
    //Dropdown.prototype = {
    //    init : function(){
    //        console.log( this.data );
    //    },
    //    bindEvent : function () {
    //
    //    }
    //}
    //Dropdown.prototype.constructor = Dropdown;
    //
    //return Dropdown;

});
