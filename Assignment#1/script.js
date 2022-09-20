/*
	WEB 303 Assignment 1 - jQuery
	{Sravan reddy soma}
	W0766138
*/
$(document).ready(function(){
	$("input").on("keyup",function(){
		let salary=$('#yearly-salary').val();
		let percent=$('#percent').val();

		let amount= salary*percent/100;
		 
		jQuery("span#amount").html('$'+amount.toFixed(2));

		
	})
})
