import friendsData, { length, push } from '../data/friends.js';
import finderData, { push as _push } from '../data/finder.js';
import path from 'path';






export default function(app){

	

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	app.get('/api/finder', function(req, res){
		res.json(finderData);
	});


var userData = []; 

app.post('/api/friends', function(req, res){

	clearMatch();

	var newfriend = req.body;
	var result;

	console.log(newfriend);
	console.log(userData);
	userData.push(newfriend);

	res.json(newfriend);


	var friendScores;
	var totalDiff;
	var results = [];
	var ratingArray = [];
	var counter = 0;
	var lowest;

	function getSum(total, num) {
    		return total + num;
	};

	function clearMatch() {
		finderData = [];
	}


	for (var i = 0; i < length; i++) {

			friendScores = friendsData[i].scores;
			
			for (var j = 0; j < newfriend.scores.length; j++) {
			results.push(Math.abs(newfriend.scores[j] - friendScores[j]));
			}

			totalDiff = results.reduce(getSum);
			friendsData[i].rating = totalDiff;
			console.log(friendsData[i].rating);
			counter++;

			results = [];

			ratingArray.push(friendsData[i].rating);
	}
		
	if (counter === length) {
		Math.max.apply(null, ratingArray);
		lowest = Math.min.apply(null, ratingArray);
		console.log(lowest);
	}

	for (var i = 0; i < length; i++) {
		if (friendsData[i].rating == lowest) {
			_push(friendsData[i]);		
		};

		friendsData[i].rating = 0;
	}

	console.log(finderData);

	push(newfriend);

	

	})
}