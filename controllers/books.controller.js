'user strict';

const {userModel, seedUserData} = require('../models/user.model');

const getBooks = (req, res) => {
	const { email } = req.query;
	userModel.findOne({ email: email }, (error, user) => {
		if (error) {
			res.send(error)
		} else {
			res.json(user)
		}
	});
}



const createBook = (request, response) => {
	const { userEmail, bookName, description, status } = request.body;
	userModel.findOne({ email: userEmail }, (error, userData) => {
		if (error) {
			response.send(error)
		} else {
			userData.books.push({ name: bookName, description, status });
			userData.save();
			response.json(userData);
		}

	})
}

const updateBook = (request, response) => {
	const bookIndex = request.params.book_idx;
	const { userEmail, bookName, description, status } = request.body;
	userModel.findOne({ email: userEmail }, (error, userData) => {
		if (error) {
			response.send(error)
		} else {
			userData.books.splice(bookIndex, 1, { name: bookName, description, status });
			userData.save();
			response.send(userData)
		}
	});
}

const deleteBook = (request, response) => {
	const bookIndex = request.params.book_idx;
	const { email } = request.query;
	userModel.findOne({ email: email }, (error, userData) => {
		if (error) {
			response.send(error)
		} else {
			userData.books.splice(bookIndex, 1);
			userData.save();
			response.send(userData)
		}
	});
}

module.exports = {
	getBooks,
	createBook,
	updateBook,
	deleteBook
};