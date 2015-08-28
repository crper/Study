/*数据排序*/
define(['jquery', 'renderHTML', 'data'], function ($, renderHTML, data) {
    /**
     * 实现组名替换及日期排序
     *
     */

    function compare(propertyName) {
        /** 实现数组对象的比较*/
        return function (object1, object2) {
            var value1 = object1[propertyName];
            var value2 = object2[propertyName];

            if (value1 < value2) {
                return -1;
            } else if (value1 > value2) {
                return 1;
            } else {
                return 0;
            }

        }
    }

    //替换显示li及进行排序
    $('.nav').on('click', 'a', function () {
        var $temp = $(this).text();
        var stickStr;
        if ($temp == "创建时间") {
            stickStr = "createDate";
        } else {
            stickStr = "name";
        }
        $('.nav-item-show').text($temp);

        data.sort(compare(stickStr));
        renderHTML.returnHtml(data);
    })
})


