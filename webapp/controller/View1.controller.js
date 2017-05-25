sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("pdf.controller.View1", {
		onInit: function() {
			this.getView().setModel(sap.ui.getCore().getModel());

		},
		onDataExportPDF : function(oEvent){
			alert("Export PDF DATA");
			alert("Export PDF DATA");
		}

	});
});