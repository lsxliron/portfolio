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
	// alert('hello world!')
})