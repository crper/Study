/*分页功能*/
define(function (require) {
    var renderHTML = require('renderHTML');
    $.fn.pageFn = function (options) {
        var conf = {
            onPageC: 10,   //每页条数
            currentPage: 1, //当前页
            pageBox: options.pageBox,
            prevFn: function () {
            },
            nextFn: function () {
            },
            totalCount: 1,  //总条数
            maxPageCount: 1  //最大页数
        };
        var opts = $.extend(conf, options);
        opts.jQprevBtn = opts.pageBox.find('.pagin-prev');   //上一页
        opts.jQnextBtn = opts.pageBox.find('.pagin-next');   //下一页
        opts.jQcurrentPage = opts.pageBox.find('.current_page'); //显示 当前第几页
        opts.jQtotalPage = opts.pageBox.find('.total_page'); //显示 总共多少页
        opts.jQonPageC = opts.pageBox.find('.select-option li'); //每页条数 下拉框

        //初始化
        function init() {
            var data = require('data');
            opts.totalCount = data.length;   //总数据的长度
            opts.maxPageCount = Math.ceil(opts.totalCount / opts.onPageC); //总页数
            opts.jQtotalPage.text(opts.maxPageCount); //最大页数

            changeData();
        }

        init();

        //上一页
        opts.jQprevBtn.click(function () {
            if (opts.currentPage == 1) {
                alert('已经是第一页');
                return;
            }
            opts.currentPage -= 1;
            changeData();
        });

        //下一页
        opts.jQnextBtn.click(function () {
            if (opts.currentPage >= opts.maxPageCount) {
                alert('已经是最后页');
                return;
            }
            opts.currentPage += 1;
            changeData();
        });

        //改变每页条数
        opts.jQonPageC.click(function () {
            opts.onPageC = parseInt($(this).text());
            opts.jQtotalPage.text(opts.totalCount);
            opts.maxPageCount = Math.ceil(opts.totalCount / opts.onPageC);
            opts.jQtotalPage.text(opts.maxPageCount);

            opts.currentPage = 1;
            changeData();
        });

        //数据处理
        function changeData() {
            opts.jQcurrentPage.text(opts.currentPage);
            renderHTML.init({
                currentPage: opts.currentPage,
                onPageC: opts.onPageC
            });
        }

        //返回长度
        return {
            setTotalCount: function (data) {
                opts.totalCount = totalCount;
            }
        }

    }
    return {
        pageFn: $.fn.pageFn
    };

})


