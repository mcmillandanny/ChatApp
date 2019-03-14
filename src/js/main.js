console.log('Hipster Review');

console.log("This is the Comment App");
const LOCAL_URL_COMMENT = 'http://localhost:1337/comment';
const API_BASE_COMMENT = 'http://159.89.151.127:1337/comment'
let commentBtns = document.querySelectorAll('.comment');
console.log(commentBtns);
let postBtn = document.querySelectorAll('.send');


//THIS IS THE NEW COMMENT APP
commentBtns.forEach(function(comment) {
	comment.addEventListener('click', function() {
		let userInput = this.parentElement.querySelector('.user-input')
		userInput.classList.toggle('closed');
		let send = this.parentElement.querySelector('.send')
		send.classList.toggle('closed');
	})
})


//Send Message

let sendComment = function() {
	console.log('being clicked')

	console.log("clicked send button", this)
	let newComment = this.parentElement.querySelector('.user-input').value;
	console.log(newComment)
	let productID = this.dataset.product
	console.log("send comment for this product: ", productID)

	let url = LOCAL_URL_COMMENT + "/" + productID;
	console.log('send comment,', newComment, ' to url,', url)

	// console.log("send comment for artist: ", this.getAttribute('data-artist'))
	axios
		.post(url, {
			text: newComment,
			timestamp: moment(new Date().getTime()).format('h:mm a')

		})
		.then(function(response) {
			console.log('server responsed', response)
			showComments(response.data, productID)
		})
		.catch(function(error) {
			console.log('Not Working', error)
		})
	
	
}
	

postBtn.forEach(function(btn) {
	btn.addEventListener('click', sendComment);
})



let showComments = function(comments, productID) {
	console.log('showing comments', comments)

	let commentsUL = document.querySelectorAll('ul.comments')[productID];
	commentsUL.innerHTML = '';

	comments.forEach(function(comment) {
		let newLiEl = document.createElement('li');
		newLiEl.innerHTML = `Your Review: ${comment.text} @ ${comment.timestamp}`

		commentsUL.appendChild( newLiEl );


	})
}

let textWrapperBot = document.querySelector(".hero-text-wrapper-bottom");
let textWrapperTop = document.querySelector(".hero-text-wrapper-top");


TweenMax.from(textWrapperBot, 1, {
	x: "100%",
	ease: Power1.easeIn
})

TweenMax.from(textWrapperTop, 1, {
	x: "-300%",
	ease: Power1.easeIn
})