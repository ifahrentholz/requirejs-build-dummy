define(['jquery', 'bxSlider'], function($, bxSlider) {
	InitBxSlider = {
		init: function(options, elem) {
			var self = this;
			self.options = $.extend( {}, $.fn.initBxSlider.options, options);

			self.elem = elem;
			self.$elem = $(elem);

			console.log('called bxSlider module');
			self.callBxSlider();
		},

		callBxSlider: function() {
			var self = this;
			self.$elem.bxSlider(self.options);
		}
	}

	$.fn.initBxSlider = function(options) {
		return this.each(function() {
			var initBxSlider = Object.create(InitBxSlider);
			initBxSlider.init(options, this);
		});
	}

	$.fn.initBxSlider.options = {}

});
