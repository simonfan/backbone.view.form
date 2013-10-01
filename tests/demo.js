define(['../backbone.view.form','backbone'], function(FormView, Backbone) {
	window.model = new Backbone.Model();

	window.form = new FormView({
		el: $('.form'),
		model: model,
		/**
		 * maps the data values to the html selectors
		 */
		map: {
			'.option': 'fruit',
			'.input-text': 'input',
			'input[name="choose-one"]': 'choice',
			'input[name="choose-multiple"]': 'check',
		},
		/** 
		 * method called to get the data hash to be displayed.
		 */
		data: function(model) {
			return model.attributes;
		},
	});



	model.set({
		title: 'Testing title',
		thumbnail: 'warning.gif',
		fruit: 'banana',
		input: 'LALALALALALA',
		choice: 'three',
		check: ['first','third','sixth']
	});




	model.on('change', function(model) {
		console.log(model.attributes);
	});



	// build an element on the fly
/*	form.build({
		parent: '',
		html: '<select name="on-the-fly"><option>Fly</option><option>Walk</option></select>',
		map: { 'select[name="on-the-fly"]': "on-the-fly" },
	});


	model.set('on-the-fly', 'Walk');

	*/
});