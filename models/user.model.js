'use strict';


const mongoose = require('mongoose');
const bookSchema = require('./books.model');

const userSchema = new mongoose.Schema({
	email: { type: String },
	books: [bookSchema]
});

const userModel = new mongoose.model('user', userSchema);


const seedUserData = () => {
	const newUser = new userModel({
		email: 'leenhazaimeh94@gmail.com',
		books: [
			{
				name: 'Breaking Point',
				description: 'A Stalker With A Tatto',
				status: 'In progress'
			},
			{
				name: 'The Lord Of The Rings',
				description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil.',
				status: 'Downloaded'				
			},
			{
				name: 'Harry Potter',
				description: 'Harry Potter, fictional character, a boy wizard created by British author J.K. Rowling. His coming-of-age exploits were the subject of seven enormously popular novels (1997–2007), which were adapted into eight films (2001–11); a play and a book of its script appeared in 2016.',
				status: 'Available'				
			},
		]
	});

	newUser.save();

}

module.exports = userModel;