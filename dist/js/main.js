'use strict';

console.log('Hipster Review');

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
	var newComment = this.parentElement.querySelector('.user-input').value;
	console.log(newComment);
	var productID = this.dataset.product;
	console.log("send comment for this product: ", productID);

	var url = API_BASE_COMMENT + "/" + productID;
	console.log('send comment,', newComment, ' to url,', url);

	// console.log("send comment for artist: ", this.getAttribute('data-artist'))
	axios.post(url, {
		text: newComment,
		timestamp: moment(new Date().getTime()).format('h:mm a')

	}).then(function (response) {
		console.log('server responsed', response);
		showComments(response.data, productID);
	}).catch(function (error) {
		console.log('Not Working', error);
	});
};

postBtn.forEach(function (btn) {
	btn.addEventListener('click', sendComment);
});

var showComments = function showComments(comments, productID) {
	console.log('showing comments', comments);

	var commentsUL = document.querySelectorAll('ul.comments')[productID];
	commentsUL.innerHTML = '';

	comments.forEach(function (comment) {
		var newLiEl = document.createElement('li');
		newLiEl.innerHTML = 'Your Review: ' + comment.text + ' @ ' + comment.timestamp;

		commentsUL.appendChild(newLiEl);
	});
};

var textWrapperBot = document.querySelector(".hero-text-wrapper-bottom");
var textWrapperTop = document.querySelector(".hero-text-wrapper-top");

TweenMax.from(textWrapperBot, 1, {
	x: "100%",
	ease: Power1.easeIn
});

TweenMax.from(textWrapperTop, 1, {
	x: "-300%",
	ease: Power1.easeIn
});
//# sourceMappingURL=main.js.map
