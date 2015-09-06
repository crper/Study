( function ( $ ) {
	$( '.content-left-menu' )
		.on( 'hover', 'a', function () {
				$( this )
					.children( 'i' )
					.removeClass( 'fa-minus' )
					.addClass( 'fa-angle-double-right' )
			}
			, function () {
				$( this )
					.children( 'i' )
					.removeClass( 'fa-angle-double-right' )
					.addClass( 'fa-minus' )
			}
		);
} )( jQuery )
