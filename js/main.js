// Document Ready Function
$(function() {
	$("#dialog").dialog({			
				height: 500,
				width: 350,
				modal: true,
				draggable: false,
				buttons: {
					'Send': function() {
						
					},
					Close: function() {
						$(this).dialog('close');
					}
				},
				open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); },
				close: function() {
					allFields.val('').removeClass('ui-state-error');
				}
	});
});