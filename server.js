const express = require('express');
const path = require('path');  // Add this line to include the 'path' module
const app = express();
const port = 3000;

// Use the 'public' directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Sample in-memory data for demonstration
const sportsData = {
    cricket: {
        table: [
            { team: 'Team A', points: 10 },
            { team: 'Team B', points: 8 },
            // Add more teams as needed
        ],
        fixtures: [
            { match: 'Team A vs Team B', date: '2024-02-01' },
            { match: 'Team C vs Team D', date: '2024-02-03' },
            // Add more fixtures as needed
        ],
    },
    football: {
        table: [
            { team: 'Team X', points: 15 },
            { team: 'Team Y', points: 12 },
            // Add more teams as needed
        ],
        fixtures: [
            { match: 'Team X vs Team Y', date: '2024-02-05' },
            { match: 'Team Z vs Team W', date: '2024-02-07' },
            // Add more fixtures as needed
        ],
    },
    volleyball: {
        table: [
            { team: 'Team P', points: 20 },
            { team: 'Team Q', points: 18 },
            // Add more teams as needed
        ],
        fixtures: [
            { match: 'Team P vs Team Q', date: '2024-02-09' },
            { match: 'Team R vs Team S', date: '2024-02-11' },
            // Add more fixtures as needed
        ],
    },
};

app.use(express.static('public')); // Assuming your HTML and CSS files are in a 'public' directory

// API endpoint to get sports data
app.get('/api/sports/:sport', (req, res) => {
    const sport = req.params.sport;
    const data = sportsData[sport] || null;
    res.json(data);
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});