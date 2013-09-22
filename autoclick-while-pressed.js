(function ($) {
	$.fn.autoclickWhilePressed = function (userOptions) {
		var interval = null;
		var initialDelayTimeout = null;
		var options = {
			intervalLength: 50,
			initialDelay: 300,
			eventToTrigger: "click"
		};
		if (typeof userOptions === "object") {
			$.extend(options, userOptions);
		}
		var $this = this;
		return this.on({
			"mousedown": function (ev) {
				initialDelayTimeout = setTimeout(function () {
					interval = setInterval(function () {
						$this.trigger(options.eventToTrigger);
					}, options.intervalLength);
				}, options.initialDelay);
			},
			"mouseup mouseleave": function () {
				if (initialDelayTimeout !== null) {
					clearTimeout(initialDelayTimeout);
				}
				if (interval !== null) {
					clearInterval(interval);
				}
			}
		});
	};
})(jQuery);