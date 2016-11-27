<img src='/uiImages/saved.png' />Your page was saved successfully.<script>redirectPage();window.top.window.redirectPage();function redirectPage()
{
		alert('redirecting');
			var action = "/admin/site/manage";
			var parms = "";
			pageRequest( action, parms, document.getElementById('content'));
			displayMessage("<img src='/uiImages/saved.png' />Your page was saved successfully.");
			return false;
		}; </script>