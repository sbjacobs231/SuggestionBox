app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
	$scope.posts = suggestions.posts;

	$scope.addSuggestion = function() {
		//if input is empty don't submit
		if(!$scope.title || $scope.title === "") {
			return;
		}
		//push suggestion posts into suggestions.js
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
			comments: [],
		});
		//after submiting, clear the input
		$scope.title = "";
	};

	$scope.upVote = function(post) {
		post.upvotes += 1;
	};
}]);

