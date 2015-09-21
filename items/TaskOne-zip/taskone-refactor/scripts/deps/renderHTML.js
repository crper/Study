define( [ 'jquery', 'data', 'checkboxSelect', 'Dropdown' ], function ( $, data,
    checkboxSelect, Dropdown ) {
    var _opts;
    var obj = {
        opts: null,
        renderHtml: function ( _data ) {
            this.returnHtml( _data, this.opts ); //初始化遍历内容
        },
        init: function ( opts ) {
            //console.log('当前页:'+opts.currentPage+'\n'+'每页条数:'+opts.onPageC);
            this.opts = opts;
            _opts = opts;
            console.log( "data", data.length );
            this.renderHtml();

        },

        /**
         *
         * @return {[function]} [遍历内容,打印到页面]
         */
        returnHtml: function ( _data, opts ) {
            var _data = _data || data;

            //函数内设置的是第一页不用js 直接读出来,这里使用JS减去1
            var showPage = _opts.onPageC * ( _opts.currentPage -
                1 );
            var temp = '',
                subItem, temp1 = '';

            var htmlStr =
                '<div class="wrapper " data-id="{{id}}" data-name="{{name}}" data-bucount="{{bucount}}">' +
                '<div class="checkbox single-check"></div>' +
                '<ul class="contact-name">' +
                '<li><a href="#">{{name}}</a></li>' +
                '<li>' +
                '创建日期:{{createDate}}</li>' +
                '</ul>' +
                '<ul class="contact-info">' +
                '<li>' +
                '<span>{{bucount}}</span>' +
                '<span>{{openRate}}%</span>' +
                '<span>{{clickRate}}%</span>' +
                '</li>' +
                '<li>' +
                '<span>订阅数</span>' +
                '<span>打开率</span>' +
                '<span>点击率</span>' +
                '</li>' +
                '</ul>' +
                '<ul class="contact-subscr ">' +
                '<li><i class="icon-contact"></i></li>' +
                '<li>订阅管理<i class="i-triangle"></i></li>' +
                '</ul>' +
                '</div>';
            for( var i = showPage; i < showPage + _opts.onPageC; i++ ) {
                subItem = _data[ i ];
                if( subItem ) {
                    temp += htmlStr.replace( /{{name}}/g,
                            subItem.name )
                        .replace( /{{createDate}}/g, subItem.createDate )
                        .replace( /{{bucount}}/g, subItem.bucount )
                        .replace( /{{openRate}}/g, subItem.openRate )
                        .replace( /{{clickRate}}/, subItem.clickRate )
                        .replace( /{{id}}/g, subItem.id );
                }

            }
            $( '#content' )
                .html( temp );
        },

        bindEvent: function () {

        }

    };
    return obj;
} );
