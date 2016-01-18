require.config({

	paths: {
		"jquery": "vendor/jquery/dist/jquery",
		"bootstrap": "vendor/bootstrap-sass-official/assets/javascripts/bootstrap.min",
		"sidr": "vendor/sidr/dist/jquery.sidr.min"
	},

	shim: {
		"bootstrap-sass" : { "deps" :['jquery'] },
		"sidr" : {"deps" :['jquery']}
	}
});

require(['jquery', 'sidr'], function($, sidr){


	//Bind scrolls to buttons
	$('#welcomeLi').bind('click', function(){
		$('body').animate({scrollTop: $('#welcomePage').offset().top}, 1000);
	});

	$('#aboutMeLi, #welcomePage button').bind('click', function(){
		$('body').animate({scrollTop: $('#aboutMePage').offset().top}, 1000);
	});

	$('#portfolioLi, #aboutMePage button').bind('click', function(){
		$('body').animate({scrollTop: $('#portfolioPage').offset().top}, 1000);
	});

	$('#projectsLi, #portfolioPage button').bind('click', function(){
		$('body').animate({scrollTop: $('#programmingProjects').offset().top}, 1000);
	});

	$('#contactLi, #programmingProjects button').bind('click', function(){
		$('body').animate({scrollTop: $('#contactMePage').offset().top}, 1000);
	});

	$('#ProfilesLi, #contactMePage button').bind('click', function(){
		$('body').animate({scrollTop: $('#profilesPage').offset().top}, 1000);
	});


	$('.menuButton').sidr({displace:false});

	$('#closeMenuLi').bind('click', function(e){
		$.sidr('toggle', 'sidr')
		e.preventDefault()
	})

})