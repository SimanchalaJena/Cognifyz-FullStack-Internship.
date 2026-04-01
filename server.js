const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const axios = require('axios');
const morgan = require('morgan');
const helmet = require('helmet');
const User = require('./models/User'); 
const app = express();

// Middleware
app.use(helmet({ contentSecurityPolicy: false })); 
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/cognifyz")
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ DB Connection Error:", err));

// Routes
app.get('/', async (req, res) => {
    try {
        const usersList = await User.find();
        const weatherResp = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=20.4625&longitude=85.8830&current_weather=true');
        const temp = weatherResp.data.current_weather.temperature;
        res.render('index', { users: usersList, weather: temp });
    } catch (err) {
        res.render('index', { users: [], weather: "N/A" });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { userName, userEmail, password } = req.body;
        const newUser = new User({ name: userName, email: userEmail, password });
        await newUser.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).send("Registration Failed: " + err.message);
    }
});

// DELETE ROUTE
app.post('/delete-user/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send("Delete Error");
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            res.send(`<h1>Welcome, ${user.name}!</h1><a href="/">Go Home</a>`);
        } else {
            res.status(401).send("Invalid Credentials");
        }
    } catch (err) { res.status(500).send("Login Error"); }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) { res.status(500).json({ error: "API Failed" }); }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server live at http://localhost:${PORT}`));