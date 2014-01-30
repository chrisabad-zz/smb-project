// File for hijacking submission forms.

$('#subscribe-form').submit(function() {
	try {
		var form = $(this);
		var email = form.find('input[name="email"]').val();
		var name = form.attr('name');

		// Swap the message
		form.hide();
		$('#success-message').show();

		if (email == '') {
			console.log('Email was blank.');
	    } else {
	    	console.log('Identifying visitor as ' + email + '.');
	    	
	    	var user = analytics.user(); 
			var id = user.id();

			// only alias user if they are anonymous
			console.log('ID: ' + id);
			console.log('Email:' + email);
			if (id != email) {
				analytics.alias(email);
			}

			// the identified user is identified with traits
			analytics.identify(email, { email: email, name: email });
			analytics.track('Signed up for ' + name);
	    }
		return false;
	} catch (error) {
		console.log('There was an error.' + error);
		return false;
	}
});