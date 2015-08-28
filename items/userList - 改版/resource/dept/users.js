define(['jquery', 'dept/data'], function ($, data) {
    return {
        init: function () {
            console.log("data ", data);
            console.log("部门职员初始化");
            this.returnHtml(); //初始化遍历内容
            this.findElements(); //模糊匹配
            this.slideTo(); // 下拉菜单
        },


        /**
         * 遍历内容,打印到页面
         * @return {[type]} [description]
         */
        returnHtml: function () {
            // 渲染页面数据
            var rgTemp, rgInnerTemp;
            var innerContentA = '<ul class="user-info">' +
                '<p class="wrapper-box list-show">' +
                '<span class="text-left save-name">{{deptName}}({{deptNameLength}})</span>' +
                '<i class="text-right icon-v ">&gt;</i>' +
                '</p>' +
                '</ul>';
            var innerContentB = '<li class="init-hide">' +
                '<div class="contact-simple-info">' +
                '<img src="resource/images/{{jpg}}">' +
                '<div class="contact-title-box">' +
                '<h4>{{displayName}}</h4>' +
                '<h5>{{posName}}</h6>' +
                '</div>' +
                '</div>' +
                '</li>';
            for (var i = 0; i < data.length; i++) {
                var userLength = data[i].userList.length;

                rgTemp = innerContentA.replace(/{{deptName}}/g, data[i].deptName)
                    .replace(/{{deptNameLength}}/g, userLength);


                $(rgTemp)
                    .appendTo($('.wrapper-innercontent'));

                for (var j = 0; j < userLength; j++) {

                    var dN = data[i].userList[j].displayName;
                    var pN = data[i].userList[j].posName;
                    rgInnerTemp = innerContentB.replace(
                        /{{displayName}}/, dN)
                        .replace(/{{posName}}/, pN)
                        .replace(/{{jpg}}/, ( j + 1 ) + ".jpg");

                    $(rgInnerTemp)
                        .appendTo($('.wrapper-innercontent  ul')
                            .eq(i));
                }
            }


        },

        slideTo: function () {
            // 下滑菜单事件
            $('.user-info')
                .on('click', 'p', function () {
                    $(this)
                        .siblings("li")
                        .stop(true)
                        .slideToggle(500)
                    $(this)
                        .children('i')
                        .toggleClass("icon-animate ");
                    $(this)
                        .children('span')
                        .toggleClass('li-animate');
                });
        },


        /**
         * 模糊匹配
         * @return {[type]} [description]
         */
        findElements: function () {

            // 输入框focus时候清除已存在的内容
            $('.input-value')
                .focus(function () {
                    if (this.value != "") {
                        this.value = '';

                    }
                });

            $('.input-value')
                .on('keydown', function (event) {

                    if ($('.input-value')
                            .val() !== "") {

                        var currKey = 0
                            , e = e || event;
                        currKey = e.keyCode || e.which || e.charCode;
                        if (currKey == 13) {
                            var $input_value = $('.input-value')
                                .val();
                            if ($input_value != '') {


                                //更换按钮样式
                                $('.search-button')
                                    .children('div.i-line')
                                    .hide();
                                $('.search-button')
                                    .children('div.i-circle')
                                    .removeClass('i-circle')
                                    .addClass('i-dismiss-circle');
                                $('.search-button')
                                    .children('div.i-times')
                                    .removeClass('init-hide');

                                // 当确认输入内容不为空的时候,隐藏之前的内容块
                                $('.wrapper-innercontent')
                                    .css("display", "none");


                                $('h4')
                                    .each(function () {
                                        var nowValue = $(this)
                                            .text();
                                        var returnCompareValue = nowValue.indexOf($input_value);
                                        var new_h4 = nowValue;
                                        var new_h5 = $(this)
                                            .siblings("h5")
                                            .text();

                                        // 追加的新内容块
                                        var innerContentNew = '<ul class="seach-content-list"><li >' +
                                            '<div class="contact-simple-info">' +
                                            '<img src="resource/images/3.jpg">' +
                                            '<div class="contact-title-box">' +
                                            '<h4>' + new_h4 + '</h4>' +
                                            '<h5>' + new_h5 + '</h5>' +
                                            '</div>' +
                                            '</div>' +
                                            '</li></ul>';

                                        if (returnCompareValue >= 1 || returnCompareValue == 0) {
                                            $(innerContentNew)
                                                .appendTo($('.wrapper-content'));
                                        }
                                        else {

                                            $('.wrapper-innercontent')
                                                .css("display", "block");


                                        }

                                    })


                            }
                            else {
                                alert('请输入您要搜索的联系人!');
                            }

                        }
                    }
                });

            // 输入内容点击模糊匹配 (功能有待完善,支持模糊搜索,但是只能不能筛选全部同样)
            // 暂时没有做的功能,回车键监听搜索,,二次点击清空搜索内容返回主列表
            /**
             * 先获取全部名字信息,再获取输入框的信息,
             * 使用indexof进行比较,若为真,则把信息渲染到页面
             *
             */
            $('#container')
                .on('click', '.search-button', function () {
                    var $input_value = $('.input-value')
                        .val();
                    if ($input_value != '') {

                        //更换按钮样式
                        $(this)
                            .children('div.i-line')
                            .hide();
                        $(this)
                            .children('div.i-circle')
                            .removeClass('i-circle')
                            .addClass('i-dismiss-circle');
                        $(this)
                            .children('div.i-times')
                            .removeClass('init-hide');


                        // 当确认输入内容不为空的时候,隐藏之前的内容块
                        $('.wrapper-innercontent')
                            .css("display", "none");


                        $('h4')
                            .each(function () {
                                var nowValue = $(this)
                                    .text();
                                var returnCompareValue = nowValue.indexOf($input_value);
                                var new_h4 = nowValue;
                                var new_h5 = $(this)
                                    .siblings("h5")
                                    .text();

                                // 追加的新内容块
                                var innerContentNew = '<ul class="seach-content-list"><li >' +
                                    '<div class="contact-simple-info">' +
                                    '<img src="resource/images/3.jpg">' +
                                    '<div class="contact-title-box">' +
                                    '<h4>' + new_h4 + '</h4>' +
                                    '<h5>' + new_h5 + '</h5>' +
                                    '</div>' +
                                    '</div>' +
                                    '</li></ul>';

                                if (returnCompareValue >= 1 || returnCompareValue == 0) {
                                    $(innerContentNew)
                                        .appendTo($('.wrapper-content'));
                                }

                            })


                    }
                    else {
                        alert('请输入您要搜索的联系人!');
                    }
                })
        }
    }
});
