/**
 * Created by WIN7 on 2015/8/10.
 */

//mouseover and mouseout
$( '.wrapper-position' )
    .on( 'mouseover', '.wrapper', function ()
    {
        $( this )
            .children( 'div.wrapper-button' )
            .show();
        $( this )
            .addClass( 'box-shadow' );
    } )
    .on( 'mouseout', '.wrapper', function ()
    {
        $( this )
            .children( 'div.wrapper-button' )
            .hide();
        $( this )
            .removeClass( 'box-shadow' );
    } );


// 功能区域
$( '.wrapper' )
    .on( 'click', '.icon-edit', function ()
    {
        $( '.alert-window' )
            .fadeIn( 300 );
        $( '#overlay' )
            .fadeIn( 300 );
    } )
    .on( 'click', '.icon-refresh', function ()
    {
        //不需要实现
    } )
    .on( 'click', '.icon-delete', function ()
    {
        $( this )
            .parents( 'div.wrapper' )
            .html( '+' )
            .addClass( 'null-tab' );

    } );


// tab滑动
$( '.alert-window>.nav' )
    .on( 'mouseover', 'li', function ()
    {
        console.log( $( this ) );
        var _index = $( this )
            .index();
        $( this )
            .addClass( "current" )
            .siblings()
            .removeClass( "current" );
        $( this )
            .parent()
            .next()
            .children( 'div' )
            .eq( _index )
            .show()
            .siblings()
            .hide();
    } )


// 关闭弹窗
$( '.dismiss-close' )
    .click( function ()
    {
        $( '.alert-window' )
            .fadeOut( 300 );
        $( '#overlay' )
            .fadeOut( 300 );
    } )
