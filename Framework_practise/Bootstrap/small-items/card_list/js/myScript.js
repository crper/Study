( function ( $ ) {
	$( "[data-toggle='tooltip']" )
		.tooltip();
	// $( '#testModal' )
	// 	.modal( {
	// 		keyboard: true
	// 			// , remote: "demo.html"
	//
	// 	} )
	// $( "#testModal" )
	// 	.on( "hidden.bs.modal", '.modal', function () {
	// 		$( this )
	// 			.removeData( "bs.modal" );
	// 	} );
	// $( document )
	// 	.on( "hidden.bs.modal", function ( e ) {
	// 		$( e.target )
	// 			.removeData( "bs.modal" )
	// 			.find( ".modal-content" )
	// 			.empty();
	// 	} );
	$( '#test-user-plus' )
		.click( function () {
			$( '.loading-position' )
				.removeClass( 'init-hide' )
		} );
} )( jQuery );
