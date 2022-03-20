			$(document).ready(function() {
				$("#subdiv3").hide();
				$("#subdiv4").hide();
				$("#subdiv5").hide();
				$("#subdiv6").hide();
				$("#subdiv7").hide();
				$("#subdiv8").hide();

			});
		
			$(document).ready(function() {
				$("#visit").click(function() {
					$("#subdiv3").show();
					$("#subdiv4").hide();
					$("#subdiv5").hide();
					$("#subdiv6").hide();
					$("#subdiv7").hide();
					$("#subdiv8").hide();
					$("#subdiv2").hide();
				});
				$("#night").click(function() {
					$("#subdiv3").hide();
					$("#subdiv4").show();
					$("#subdiv5").hide();
					$("#subdiv6").hide();
					$("#subdiv7").hide();
					$("#subdiv8").hide();
					$("#subdiv2").hide();				
				});
				$("#doanddont").click(function() {
					$("#subdiv3").hide();
					$("#subdiv4").hide();
					$("#subdiv5").show();
					$("#subdiv6").hide();
					$("#subdiv7").hide();
					$("#subdiv8").hide();
					$("#subdiv2").hide();
				});
				$("#fort").click(function() {
					$("#subdiv3").hide();
					$("#subdiv4").hide();
					$("#subdiv5").hide();
					$("#subdiv6").show();
					$("#subdiv7").hide();
					$("#subdiv8").hide();
					$("#subdiv2").hide();
				});
				$("#shajaha").click(function() {
					$("#subdiv3").hide();
					$("#subdiv4").hide();
					$("#subdiv5").hide();
					$("#subdiv6").hide();
					$("#subdiv7").hide();
					$("#subdiv8").show();
					$("#subdiv2").hide();
				});
				$("#Mumtaz").click(function() {
					$("#subdiv3").hide();
					$("#subdiv4").hide();
					$("#subdiv5").hide();
					$("#subdiv6").hide();
					$("#subdiv7").show();
					$("#subdiv8").hide();
					$("#subdiv2").hide();
				});
			});
