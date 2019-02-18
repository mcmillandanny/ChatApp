'use strict';

console.log('Chat App');

console.log("This is the Comment App");
var LOCAL_URL_COMMENT = 'http://localhost:1337/comment';
var API_BASE_COMMENT = 'http://159.89.151.127:1337/comment';
var commentBtns = document.querySelectorAll('.comment');
console.log(commentBtns);
var postBtn = document.querySelectorAll('.send');

//THIS IS THE NEW COMMENT APP


commentBtns.forEach(function (comment) {
	comment.addEventListener('click', function () {
		var userInput = this.parentElement.querySelector('.user-input');
		userInput.classList.toggle('closed');
		var send = this.parentElement.querySelector('.send');
		send.classList.toggle('closed');
	});
});

//Send Message

var sendComment = function sendComment() {
	console.log('being clicked');

	console.log("clicked send button", this);
	console.log(this.parentElement);
	var newComment = this.parentElement.querySelector('.user-input').value;
	console.log(newComment);
	console.log("send comment for artist: ", this.dataset.artist);

	// console.log("send comment for artist: ", this.getAttribute('data-artist'))
	axios.post(LOCAL_URL_COMMENT + "/" + this.dataset.artist, {
		text: newComment
	}).then(function (response) {
		console.log('server responsed', response);
		showComments(response.data);
	}).catch(function (error) {
		console.log('Not Working', error);
	});
};

postBtn.forEach(function (btn) {
	btn.addEventListener('click', sendComment);
});

var showComments = function showComments(comments) {
	console.log('showing comments', comments);

	var commentsUL = document.querySelector('ul.comments');
	commentsUL.innerHTML = '';

	comments.forEach(function (showComments) {
		var showComment = document.createElement('li');
		showComment.innerHTML = '' + comments.text;

		commentsUL.appendChild(newComment);
	});
};
//# sourceMappingURL=main.js.map
