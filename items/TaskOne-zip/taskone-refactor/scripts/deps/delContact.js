/**
 * 删除联系人模块
 */
define(['jquery', 'data', 'checkboxSelect', 'renderHTML', 'pageFn'], function ($, data, checkboxSelect, renderHTML, pageFn) {
    //点击新增按钮弹出对话窗口
    $('.nav').on('click', '.nav-item-del', function () {
        console.log($(this));
        $('#overlay,.delete-contact-info').fadeIn(300);
        $('#delete-checkbox-confirm').removeClass('checkbox-selector-bg');
    });

    //点击X按钮或者取消按钮隐藏对话窗口
    $('.delete-contact-info').on('click', '.close-window', function () {
        $('.checkbox').removeClass('checkbox-selector-bg');

        //清空上一次勾选插入的条目;
        $('.delete-contact-info>ul').children('li').not(':first').remove();
        $('#overlay,.delete-contact-info').fadeOut(300);

    });

    //点击删除按钮动态获取要删除的数据且删除联系人
    $('#container').on('click', '.nav-item-del', function () {
        var names = [];
        var ids = [];
        var RegTemp = '';
        var delteItem = '<li class="li-basic-style">' +
            '<span>' + '{{name}}' + '</span>' +
            '<span>' + '{{bucount}}' + '</span>' +
            '</li>';

        //排除第一个包裹块中wrapper,,不然会出现一条undefined
        if ($('#checkAllorCaner').hasClass('checkbox')) {
            $dom = $('.checkbox-selector-bg').closest('.wrapper:not(:first)');
        } else {
            $dom = $('.checkbox-selector-bg').closest('.wrapper');
        }

        //遍历勾选的对象,并展示到页面中
        $dom.each(function () {
            var nameTemp = $(this).data("name");
            console.log(nameTemp);
            var bucountTemp = $(this).data("bucount");
            console.log(bucountTemp);
            RegTemp += delteItem.replace(/{{name}}/g, nameTemp)
                .replace(/{{bucount}}/g, bucountTemp);
        });

        $('.delete-contact-info>ul').children('li').after(RegTemp);


        //清空对象


    })


    //删除联系人
    $('body').on('click', '.contact-info-del', function () {


        //console.log($dom);
        // 把找到的包裹层推入新数组
        var ids = [];
        $dom.each(function () {
            ids.push($(this).data("id"));
        });
        //console.log(ids);
        // 比较数组,剔除原数组的数据
        if ($('#delete-checkbox-confirm').hasClass('checkbox-selector-bg')) {



            for (var j = 0; j < ids.length; j++) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == ids[j]) {
                        data.splice(i, 1);
                        $dom[j].remove();
                        i--;
                        break;
                    }
                }
                $('.close-window').trigger("click");
                renderHTML.returnHtml(data);
            }
        } else {
            alert('"请勾选确认删除所选联系人"')
        }

    });
});
