app.factory('suggestions', [function() {
	var demoSuggestions = {
		posts: [
			{
				title: 'Free pizza at stand up',
				upvotes: 15,
				comments: [],
			},
			{
				title: 'End all club emails with dad jokes',
				upvotes: 9,
				comments: [],
			},
			{
				title: 'Retrofit water fountain with Champaign',
				upvotes: 7,
				comments: [],
			},
			{
				title: 'Friday is bring your cat to work day',
				upvotes: 3,
				comments: [],
			},
			{
				title: 'Start the day with an inspirational DJ Khaled quote',
				upvotes: 5,
				comments: [],
			}
		]
	};
	return demoSuggestions;
}]);