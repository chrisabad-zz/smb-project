// File for hijacking submission forms.

$('#subscribe-form').submit(function() {
	try {
		var form = $(this);
		var email = form.find('input[name="email"]').val();
		var name = form.attr('name');

		// Swap the message
		form.hide();
		// $('#success-message').show();
		$('#feedback-request').show();
		$('#subscribe-text').text("What do you think about the product?")

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
			traits = { email: email, name: email }
			traits[name] = true;
			analytics.identify(email, traits);
			analytics.track('Signed up for ' + name);
	    }
		return false;
	} catch (error) {
		console.log('There was an error.' + error);
		return false;
	}
});

$('#subscribe-form-bottom').submit(function() {
	try {
		var form = $(this);
		var email = form.find('input[name="email"]').val();
		var name = form.attr('name');

		// Swap the message
		form.hide();
		$('#feedback-request-bottom').show();
		$('#subscribe-text-bottom').text("What do you think about the product?")

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
			traits = { email: email, name: email }
			traits[name] = true;
			analytics.identify(email, traits);
			analytics.track('Signed up for ' + name);
	    }
		return false;
	} catch (error) {
		console.log('There was an error.' + error);
		return false;
	}
});

$('#feedback-form').submit(function() {
	try {
		var form = $(this);
		var content = form.find('textarea[id="feedback"]').val();
		var name = form.attr('name');

		// Swap the message
		form.hide();
		$('#success-message').show();

		if (content == '') {
			console.log('Feedback was blank.');
	    } else {
	    	console.log('Recording content as ' + content + '.');
	    	
	    	var user = analytics.user(); 
			var id = user.id() || 0;

			var myRootRef = new Firebase('https://dazzling-fire-6599.firebaseio.com/feedbacks');
			myRootRef.push({concept: name, text: content, user: id});
	    }
		return false;
	} catch (error) {
		console.log('There was an error.' + error);
		return false;
	}
});

$('#feedback-form-bottom').submit(function() {
	try {
		var form = $(this);
		var content = form.find('textarea[id="feedback-bottom"]').val();
		var name = form.attr('name');

		// Swap the message
		form.hide();
		$('#success-message-bottom').show();

		if (content == '') {
			console.log('Feedback was blank.');
	    } else {
	    	console.log('Recording content as ' + content + '.');
	    	
	    	var user = analytics.user(); 
			var id = user.id() || 0;

			var myRootRef = new Firebase('https://dazzling-fire-6599.firebaseio.com/feedbacks');
			myRootRef.push({concept: name, text: content, user: id});
	    }
		return false;
	} catch (error) {
		console.log('There was an error.' + error);
		return false;
	}
});

$('#competitor-form').submit(function() {
	try {
		var form = $(this);
		var content = form.find('input[id="feedback"]').val();
		var name = form.attr('name');
		var product = urlParams.product;

		// Swap the message
		form.hide();
		$('#subscribe-form-signup').show();
		$('#subscribe-form').show();

		if (content == '') {
			console.log('Feedback was blank.');
	    } else {
	    	console.log('Recording content as ' + content + '.');
	    	
	    	var user = analytics.user(); 
			var id = user.id() || 0;

			var myRootRef = new Firebase('https://dazzling-fire-6599.firebaseio.com/feedbacks');
			myRootRef.push({concept: product, text: content, user: id});
	    }
		return false;
	} catch (error) {
		console.log('There was an error.' + error);
		return false;
	}
});