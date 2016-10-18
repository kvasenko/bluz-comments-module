/**
 * Configuration example
 * @author Anton Shevchuk
 */
/*global define,require*/
require.config({
	paths: {
		"jquery": './vendor/jquery',
		"backbone": '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone',
	},
	
	shim: {
		"bootstrap": {
			deps: ['jquery'],
			exports: '$.fn.popover'
		},
	},
});

require(['bluz', 'bluz.ajax']);
