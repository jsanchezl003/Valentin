const express = require('express');
const cors = require('cors');
const movies = require('./movies');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json()); // To parse JSON request bodies

let queue = [];

// Ruta de ejemplo para obtener películas
app.get('/api/movies', (req, res) => {       
    res.json(movies);
});

// Route to search movies
app.get('/api/movies/search', (req, res) => {
  const searchQuery = req.query.q;
  if (searchQuery) {
      const filteredMovies = movies.filter(movie =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      res.json(filteredMovies);
  } else {
      res.json([]);
  }
});

// Add to queue
app.post('/api/queue', (req, res) => {
  const movie = req.body;
  if (!queue.some(m => m.title === movie.title)) {
      queue.push(movie);
      res.status(201).json({ message: 'Movie added to queue', queue });
  } else {
      res.status(400).json({ message: 'Movie already in queue' });
  }
});

// Remove from queue
app.delete('/api/queue', (req, res) => {
  const { title } = req.body;
  const index = queue.findIndex(m => m.title === title);
  if (index > -1) {
      queue.splice(index, 1);
      res.status(200).json({ message: 'Movie removed from queue', queue });
  } else {
      res.status(404).json({ message: 'Movie not found in queue' });
  }
});

app.get('/api/queue', (req, res) => {
  res.json(queue);
});


app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
