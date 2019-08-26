const express = require('express');
const mongoose = require('mongoose');

// mongodb+srv://tabs150:<password>@cluster0-sfnz1.mongodb.net/test?retryWrites=true&w=majority
// cmd connect - mongo "mongodb+srv://cluster0-sfnz1.mongodb.net/test" --username tabs150
const app = express();

const items = require('./routes/api/items');

// bodyParser Middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}...`));
