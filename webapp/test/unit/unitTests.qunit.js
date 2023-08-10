/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"jungheinrichsbx/helloworldui5agr/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
