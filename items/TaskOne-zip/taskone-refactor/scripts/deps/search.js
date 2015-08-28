define(['jquery', 'data', 'renderHTML', 'pageFn'], function ($, data, renderHTML, pageFn) {

        function findElements(findArgs) {
            var temp_array = [];
            for (var j = 0; j < data.length; j++) {
                if (data[j].name.indexOf(findArgs) != -1) {
                    temp_array.push(data[j]);
                } else {
                    continue;
                }
            }
            return temp_array;
            console.log($temp_array);

        }


        //查询的方法
        $('.search-button').on('click', function () {
            var $input_value = $('.input-value').val();
            var _data;


            if ($input_value !== "") {
                _data = findElements($input_value);
                console.log(_data);
                $('.input-value').val('');
                $('.search').fadeOut(100);
                return renderHTML.returnHtml(_data);

            } else {
                return renderHTML.returnHtml(_data);
                $('.search').fadeOut(100);
            }
        });


        /**
         * 筛选数据,回车键触发
         */
        $('.input-value').on('keydown', function (event) {
            var _data;
            if ($('.input-value').val() != "") {
                console.log("fsdfsdf");
                if (event.keyCode == 13) {
                    var $inputValue = $('.input-value').val();
                    _data = findElements($inputValue);
                    $('.input-value').val('');
                    $('.search').fadeOut(100);
                    renderHTML.returnHtml(_data);
                }
            }
        });
    }
)