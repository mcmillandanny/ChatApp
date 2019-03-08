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
	console.log(this.parentElement)
	let newComment = this.parentElement.querySelector('.user-input').value;
	console.log(newComment)
	console.log("send comment for artist: ", this.dataset.artist)

	// console.log("send comment for artist: ", this.getAttribute('data-artist'))
	axios
		.post(LOCAL_URL_COMMENT + "/" + this.dataset.artist , {
			text: newComment
		})
		.then(function(response) {
			console.log('server responsed', response)
			showComments(response.data)
		})
		.catch(function(error) {
			console.log('Not Working', error)
		})
	
	
}
	

postBtn.forEach(function(btn) {
	btn.addEventListener('click', sendComment);
})



let showComments = function(comments) {
	console.log('showing comments', comments)

	let commentsUL = document.querySelector('ul.comments');
	commentsUL.innerHTML = '';

	comments.forEach(function(showComments) {
		let showComment = document.createElement('li');
		showComment.innerHTML = `${comments.text}`

		commentsUL.appendChild( newComment );


	})
	
}