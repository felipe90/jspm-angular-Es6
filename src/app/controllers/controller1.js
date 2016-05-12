
class Controller {

    constructor( ItemServices ) {

    	ItemServices.getItems().then((data) => {
	    	this.posts = data.data;
    	});

    }

	AddPost () {
		let tempPots = {};

		tempPots.userId = 0;
		tempPots.title = this.newPost.title;
		tempPots.body = this.newPost.body;

		this.newPost.title = '';
		this.newPost.body = '';

		console.log(tempPots);
		this.posts.unshift(tempPots);

	};

	ShowAuthorDetail (data) {
		alert('Author says '+ data);
	}


}

Controller.$inject = [ 'ItemServices' ];

export default Controller;