require.config({

	paths: {
		"jquery": "vendor/jquery/dist/jquery",
		"bootstrap": "vendor/bootstrap/dist/js/bootstrap.min"
	},

	shim: {
		"bootstrap-sass" : { "deps" :['jquery'] }
	}
});

require(['jquery'], function($){
	// alert('hello world!')
})