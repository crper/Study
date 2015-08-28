define(["app/app3"], function(app3) {
        //console.log(app3.add(2,5));
        
         
        $("#old").click(function(){
        	  $("input").trigger("focus");
    	});
    	
        $("#new").click(function(){
        	  $("input").triggerHandler("focus");
    	});
    	
    	$("input").on('focus',function(){
    		$("<span>Focused!</span>").appendTo("body").fadeOut(1000);
    	});
    	
    	
    }
);
