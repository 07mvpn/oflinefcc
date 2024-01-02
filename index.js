// app.js
const express = require('express');
const app = express();
const path = require('path');
const port = 5500;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/myprofile', (req, res) => {
  res.render('myprofile', { message: 'Hello, Jee This is My Profile!' });
});

app.get('/explore', (req, res) => {
  res.render('explore', { message: 'explore, Jee This is My explore!' });
});

app.get('/learn', (req, res) => {
  res.render('learn', { message: '' });
});

app.get('/attendence', (req, res) => {
  res.render('attendence', { message: 'This is attendence Panel!' });
});


app.get('/zone', (req, res) => {
  res.render('zone', { message: 'This is ZONE Panel!' });
});


app.get('/leaderboard', (req, res) => {
  res.render('leaderboard', { message: 'This is ZONE Panel!' });
});

app.get('/notification', (req, res) => {
  res.render('notification', { message: 'This is Notification Panel!' });
});

app.get('/coin', (req, res) => {
  res.render('coin', { message: '' });
});

app.get('/trending', (req, res) => {
  res.render('trending', { message: '' });
});

app.get('/today', (req, res) => {
  res.render('today', { message: '' });
});

app.get('/jobvacancy', (req, res) => {
  res.render('jobvacancy', { message: '' });
});

app.get('/edunews', (req, res) => {
  res.render('edunews', { message: '' });
});

app.get('/tipstricks', (req, res) => {
  res.render('tipstricks', { message: '' });
});

app.get('/zonesurvivors', (req, res) => {
  res.render('zonesurvivors', { message: '' });
});

app.get('/newupdates', (req, res) => {
  res.render('newupdates', { message: '' });
});

app.get('/registration', (req, res) => {
  res.render('partials/advance-signup', { message: 'This is Registration Panel!' });
});

// Route for Subscriber 1
app.get('/subscriber1', (req, res) => {
  res.render('subscriber/subscriber1', { pageTitle: 'Subscriber 1' });
});

// Route for Hariom Kumar's page
app.get('/hariom', (req, res) => {
  res.render('teachers/hariom-kumar/hariom', { pageTitle: "Hariom Kumar's Page" });
});

// Route for Parents page
app.get('/parents', (req, res) => {
  res.render('parents/dashrath-bin/dashrath-bin', { pageTitle: "D.B. Page" });
});


// Routes for guest profiles
app.get('/guest1', (req, res) => {
  res.render('guests/guest1/guest1', { message: 'Hello, Guest 1!' });
});

app.get('/guest2', (req, res) => {
  res.render('guests/guest2/guest2', { message: 'Hello, Guest 2!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
