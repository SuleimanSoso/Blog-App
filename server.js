const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;

// MongoDB connection string
const dbURI = 'mongodb+srv://Enigma:test1234@nodetutorial.xcsiwrh.mongodb.net/blogs?retryWrites=true&w=majority&appName=NodeTutorial';

mongoose.connect(dbURI)
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
