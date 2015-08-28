define([
    'jquery',
    'dept/users'
],function( $ , users ) {

    return {
        init : function () {

            // 其它初始化工作
            // doSomething..

            // 部门职员初始化工作
            users.init();
        }
    }
});
