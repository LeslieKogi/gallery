const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

const index = require('./routes/index');
const image = require('./routes/image');

// Connect to DB
mongoose.connect(config.mongoURI.development, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));

// Initialize Express
const app = express();

// View engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Routes
app.use('/', index);
app.use('/image', image);

module.exports = app;  // EXPORT app for testing

// Only start server if file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is listening at http://0.0.0.0:${PORT}`);
  });
}
