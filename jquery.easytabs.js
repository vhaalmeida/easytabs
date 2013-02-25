(function($){
    $.fn.easytabs = function(options) {
 
	    var defaults = {
	      'activeClass' : 'active',
	    };

	    var settings = $.extend( {}, defaults, options );

	    return this.each(function() {
	    	var elem = $(this);
	        elem.find('> div').hide();
			elem.find('> div:first').show();
			elem.find('> ul > li:first').addClass(settings.activeClass);
			elem.find('> ul > li a').click(function(){
				elem.find('> ul > li').removeClass(settings.activeClass);
				$(this).parent().addClass(settings.activeClass);
				var currentTab = $(this).attr('href');
				elem.find('> div').fadeOut(200);
				$(currentTab).fadeIn(200);
				return false;
			});
	    });

	}; 
})( jQuery );