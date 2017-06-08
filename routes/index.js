const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	const thales = { name: 'Thales', age: 27}
	//res.send('Hey! It works!');
	//res.json(thales);
	//res.send(req.query.name);
	//res.json(req.query);
	res.render('hello', {
		name: 'Thales',
		dog: req.query.dog,
		title: 'I love food!'
	});
});

router.get('/reverse/:name', (req, res) => {
	const reverse = [...req.params.name].reverse().join('');
	res.send(reverse);
});

module.exports = router;
