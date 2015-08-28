/**
 * require参数配置
 * 版本:20150811
 * JQUERY:1.11.3
 * REQUIREJS版本:RequireJS 2.1.11
 */
require.config(
    {
        baseUrl: 'scripts'
        , urlArgs: 'v=20150811'
        , paths: {
        jquery: 'libs/jquery-1.11.3.min',
        renderHTML: 'deps/renderHTML',
        sortData: 'deps/sortData',
        checkboxSelect: 'deps/checkboxSelect',
        Dropdown: 'deps/Dropdown',
        addContact: 'deps/addContact',
        delContact: 'deps/delContact',
        search: 'deps/search',
        pageFn:'deps/pageFn'
    }

    });

require(['jquery',
        'checkboxSelect',
        'Dropdown',
        'addContact',
        'delContact',
        'sortData',
        'search',
        'pageFn'
    ],
    function ($ , checkboxSelect, Dropdown, addContact, delContact, sortData, search, pageObj) {
		pageObj.pageFn({
			pageBox: $('#footer'),
			currentPage : 1,
			nextFn : function(opts){

			},
			prevFn : function(opts){

			}
		});
		//console.log(renderHTML);
        //renderHTML.init();
    });