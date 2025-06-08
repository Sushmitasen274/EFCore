
		function FetchFinancialYearPartial() 
		{
		debugger;
		 $('#myModalfinancialyear .modal-body').empty();
		$.ajax({
			type: "GET",
			url: "/FMS/GeneralFunctionsFms/GetFinancialYearDetails",
			
			success: function (response) {
				debugger;
				$('#myModalfinancialyear .modal-body').html(response);
				    var modalTitle = "Change Financial Year";
            $('#myModalfinancialyear .modal-title').text(modalTitle);
				  $('#myModalfinancialyear').modal({
				backdrop: 'static', 
				keyboard: false 
				});	
			  $("#loader").hide();
				  $(document).draggable({
								cursor: 'move', 
								opacity: 0.5 
							});
							},
							failure: function (response) {
								console.log(response.responseText);
							},
							error: function (response) {
								console.log(response.responseText);
							}
						});
				}

