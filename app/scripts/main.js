require.config({

	paths: {
		"jquery": "vendor/jquery/dist/jquery",
		"bootstrap": "vendor/bootstrap-sass-official/assets/javascripts/bootstrap.min",
		"sidr": "vendor/sidr/dist/jquery.sidr.min",
	},

	shim: {
		"bootstrap-sass" : { "deps" :['jquery'] },
		"sidr" : {"deps" :['jquery']}
	}
});

require(['jquery', 'sidr', 'bootstrap'], function($, sidr, bootstrap){


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


	// Create sidbar
	$('.menuButton').sidr({displace:false});

	//Bind sidebar closing button
	$('#closeMenuLi').bind('click', function(e){
		$.sidr('toggle', 'sidr')
		e.preventDefault()
	});

	//Google Analytics

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-72587435-1', 'auto');
		ga('send', 'pageview');

})