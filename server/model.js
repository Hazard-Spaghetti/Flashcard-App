const mongoose = require('mongoose');
//lets you reference items in .env
require('dotenv').config();

//connects to online DB
mongoose
  .connect(process.env.MONGODB_URI, { dbName: 'Flashcards' })
  .then(console.log('connected to flashcards database'));
// .catch((err) => console.log(err))); **** fix this *****

//create a schema for our cards
const cardSchema = new mongoose.Schema({
  front: { type: String, required: true },
  back: { type: String, required: true },
});

//create schema for our deck
const deckSchema = new mongoose.Schema({
  deckName: { type: String, required: true },
  cards: [cardSchema], // array of cards, each card is an obj
});

//create schema for different users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//create schema for the current session
const sessionSchema = new mongoose.Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 600, default: Date.now },
});

// const Deck = mongoose.model('Deck', deckSchema);
// // const Card = mongoose.model('Card', cardSchema, 'Deck');

// module.exports = {
//     Deck,
//     // Card,
// };
const Deck = mongoose.model('Deck', deckSchema, 'Deck');
const User = mongoose.model('User', userSchema, 'User');
const Session = mongoose.model('Session', sessionSchema, 'Session');

module.exports = { Deck, User, Session };
