(function() {
    var $todoForm = $('#todoForm');
    var $todoInput = $('#todoInput');
    var $todoList = $('#todoList');
    var $todoCount = $('#todoCount');

    /**
     * 统计项目的方法
     * 使用length获取children的个数
     * 再使用三目运算符进行判断个数是否存在,进行内容显示
     */
    function count() {
        var len = $todoList.children().length;
        $($todoCount.html(len > 0 ? +len + ' item list' : 0 + ' item list'));
    }

    /**
     * 使用val获取input的值,进行判断是否为空
     * 然后追加到ul下
     * 再清空当前输入框的值
     * 最后统计当前的项目个数和阻止页面刷新
     */
    $todoForm.submit(function(e) {
        var input_value = $todoInput.val();

        if (input_value != "") {
            $todoList.append(
                '<div class="input-group"><span class="input-group-addon">' +
                '<input type="checkbox"  name="check_list" class="checkItem"></span>' +
                '<li class="list-group-item doubleChange" ><span class="changeContent">' +
                input_value +
                '</span>&nbsp; <a href="#" class="todoDelete " >&times;</a></li><div>'
            )
        } else {
            alert("请输入您要添加的todo项!!");
        }
        $todoInput.val('');
        count();
        e.preventDefault();
    });

    /**
     * 删除所有已经完成的项目
     */
    $('#deleteAllorCaner').on('click', function() {

        $(':checkbox[name=check_list]').each(function() {

            if ($(this).prop("checked")) {
                $(this).parents("ul div.input-group").remove();
                count();
            }
        })
    });

    /**
     * 单选多选添加删除线和背景
     *
     */
    $("#todoList").on("click", ".checkItem", function() {

        if ($(this).parents(".input-group").find('input').prop(
                "checked")) {

            $(this).parents(".input-group").find('li').addClass(
                "list-group-item-success ");
            $(this).parents(".input-group").find('li>span').addClass(
                "del-line");

        } else {
            $(this).parents(".input-group").find('li').removeClass(
                "list-group-item-success ");
            $(this).parents(".input-group").find('li>span').removeClass(
                "del-line");
        }
    });



    /**
     * 全选和全不选功能实现
     */
    $('#selectAllorCancer').on('click', function() {

        if ($('#selectAllorCancer').prop("checked")) {
            $("input[name='check_list']").prop("checked", true); //全选
            console.log(".changeContent");
            //设置删除线和背景效果
            $("input[name='check_list']").parents("div").children(
                "li").addClass(
                "list-group-item-success");
            $(".changeContent").addClass(
                "del-line");
        } else {

            $("input[name='check_list']").prop("checked", false); //全不选

            //取消删除线和背景效果
            $("input[name='check_list']").parents("div").children(
                "li").removeClass(
                "list-group-item-success ");
            $(".changeContent").removeClass(
                "del-line");

        }

    });


    /**
     * 双击编辑内容替换事件
     * 使用了contentedittable属性-HTML5
     * 监听回车键事件,回车即保存内容
     */
    $("#todoList").on("dblclick", ".doubleChange", function() {

        var $old_var = $(this).children('span');
        $old_var.attr("contenteditable", "true");
        $old_var.on('keydown', function(event) {
            if (event.keyCode == 13) {
                $(this).attr("contenteditable", "false");
            }
        }).on('blur', function() {
            $(this).attr("contenteditable", "false");
        });
    });


    /**
     * 删除li的事件
     */
    $todoList.on('click', '.todoDelete', function(e) {

        $(this).parents("ul div.input-group").remove();
        count();
    })

    /**
     * 关闭符号的渐隐渐显
     */
    $(".list-group").on({
        mouseover: function() {
            $('.todoDelete').stop(true).fadeIn(500);
        },
        mouseout: function() {
            $('.todoDelete').stop(true).fadeOut(500);
        },
    }, 'li');



})();
