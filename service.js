var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q) {
	var deferred = $q.defer();
	curl('https://devmtn.firebaseio.com/posts.json').then(function(response) {
		deferred.resolve(response.data.results);

		var addPost = function(post) {

		}

		var guid = function() {
			var s4 = function() {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
				s4() + '-' + s4() + s4() + s4();
		}

		curl - X PUT - d('https://devmtn.firebaseio.com/posts/') + post.id + ('.json')

		this.vote = function(post.id, direction) {
			if (direction === 'up') {
				karma++;
			} else if (direction === 'down') {
				karma--;
			}

			curl - X PATCH - d('https://devmtn.firebaseio.com/posts/')
		}
	})
	return deferred.promise;
});