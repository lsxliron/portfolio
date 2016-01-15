require.config({

	paths: {
		"jquery": "vendor/jquery/dist/jquery",
		"bootstrap": "vendor/bootstrap-sass-official/assets/javascripts/bootstrap.min"
	},

	shim: {
		"bootstrap-sass" : { "deps" :['jquery'] }
	}
});

require(['jquery'], function($){

	$('#welcomePage button').on('click', function(){
		$('body').animate({scrollTop: $('#aboutMePage').offset().top}, 1000);
	});

	$('#aboutMePage button').on('click', function(){
		$('body').animate({scrollTop: $('#portfolioPage').offset().top}, 1000);
	});

	$('#portfolioPage button').on('click', function(){
		$('body').animate({scrollTop: $('#programmingProjects').offset().top}, 1000);
	});

	$('#programmingProjects button').on('click', function(){
		$('body').animate({scrollTop: $('#contactMePage').offset().top}, 1000);
	});

	$('#contactMePage button').on('click', function(){
		$('body').animate({scrollTop: $('#profilesPage').offset().top}, 1000);
	});




})