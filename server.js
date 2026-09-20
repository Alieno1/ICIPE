const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Ensure database directory and JSON file exists
const dbDir = path.join(__dirname, 'database');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir);
}
const dbFile = path.join(dbDir, 'submissions.json');
if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify({ contacts: [], subscriptions: [] }, null, 2));
}

// API endpoint for Contact Us
app.post('/api/contact', (req, res) => {
    try {
        const data = fs.readFileSync(dbFile, 'utf8');
        const db = JSON.parse(data);
        db.contacts.push({
            date: new Date().toISOString(),
            ...req.body
        });
        fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
        res.status(200).json({ success: true, message: 'Contact saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// API endpoint for Subscription
app.post('/api/subscribe', (req, res) => {
    try {
        const data = fs.readFileSync(dbFile, 'utf8');
        const db = JSON.parse(data);
        db.subscriptions.push({
            date: new Date().toISOString(),
            ...req.body
        });
        fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
        res.status(200).json({ success: true, message: 'Subscription saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
