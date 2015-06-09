 transition on jquery
$(document).ready(function() {
	$('#vacations').on('mouseenter' , '.vacation', function(){
	  $(this).toggleClass('highlighted');
	 if($(this).hasClass('highlighed')) {
	    $(this).animate({'top':'-10px'});
	  } else {
	  	$(this).animate({'top': '0px'}, 400)
	  }
	  }
	});
});

transition on css then jquery
.vacation {
	-moz-transiiton: top 0.2s;
	-o-transiition: top 0.2s;
	-webkit-transition: top 0.2s;
	transition: top 0.2s;
}

.highlighted {
	top: -10px;
}

$(document).ready(funciton(){
  $('#vacations').on('click', '.vacation')
 
});