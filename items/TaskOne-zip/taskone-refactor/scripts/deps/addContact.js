/**
 * 增加联系人模块
 */
define(['jquery', 'data', 'renderHTML', 'pageFn'], function ($, data, renderHTML, pageFn) {

    //点击新增按钮弹出对话窗口
    $('.nav').on('click', '.nav-item-add', function () {
        $('#overlay,.add-contact-info').fadeIn(300);
    });

    //点击X按钮或者取消按钮隐藏对话窗口
    $('.add-contact-info').on('click', '.close-window', function () {
        $('#overlay,.add-contact-info').fadeOut(300);
    });

    $('.contact-subscr  .icon-contact').click(function () {
        $('#overlay,.add-contact-info').fadeIn(300);
    })

    $('.contact-info-save').click(function () {
        var $groupName = $('.input-value-add-groupname').val();
        console.log($(this));
        var d = new Date();
        var cd = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay() +
            "" + d.getHours() +
            "-" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getUTCSeconds();
        var randomRate = Math.ceil((Math.random() * 99) + 1);
        var randomSubscr = Math.ceil((Math.random() * 999));
        var randomNumID = Math.ceil((Math.random() * 100000000000) + 1);
        if ($('.input-value-add').val() != "") {
            var temple = {
                "name": $groupName,
                "id": randomNumID,
                "bucount": randomSubscr,
                "createDate": cd,
                "openRate": randomRate,
                "clickRate": randomRate
            };
            $('.add-contact-info,#overlay').fadeOut(500);
        } else {
            alert("*号内容必须输入内容,谢谢合作!");
        }
        data.unshift(temple);
        $('.input-value-add').val('');
        renderHTML.renderHtml(data);//.returnHtml(_data);
    })

});