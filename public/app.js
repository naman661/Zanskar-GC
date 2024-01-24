document.addEventListener('DOMContentLoaded', function () {
    const currentSport = getCurrentSport();

    // Fetch sports data from the server based on the current page
    function fetchSportsData(sport) {
        fetch(`/api/sports/${sport}`)
            .then(response => response.json())
            .then(data => {
                // Update the DOM with the fetched data
                updateDOM(data);
            })
            .catch(error => console.error('Error fetching sports data:', error));
    }

    // Update the DOM with sports data
    function updateDOM(data) {
        // Update the DOM elements based on the received data
        // You can manipulate the DOM here to display tables, fixtures, points, etc.

        // Example: Display Fixtures
        const fixturesContainer = document.getElementById('fixtures');
        if (fixturesContainer && data.fixtures) {
            fixturesContainer.innerHTML = '<h3>Upcoming Fixtures</h3>';
            const list = document.createElement('ul');
            data.fixtures.forEach(fixture => {
                const listItem = document.createElement('li');
                listItem.textContent = `${fixture.match} - ${fixture.date}`;
                list.appendChild(listItem);
            });
            fixturesContainer.appendChild(list);
        }

        // Example: Display Points Table
        const pointsTableContainer = document.getElementById('points-table');
        if (pointsTableContainer && data.table) {
            pointsTableContainer.innerHTML = '<h3>Points Table</h3>';
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
            `;
            data.table.forEach(team => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${team.team}</td><td>${team.points}</td>`;
                table.appendChild(row);
            });
            pointsTableContainer.appendChild(table);
        }
    }

    // Get the current sport based on the page's title
    function getCurrentSport() {
        const pageTitle = document.title.toLowerCase();
        if (pageTitle.includes('cricket')) {
            return 'cricket';
        } else if (pageTitle.includes('football')) {
            return 'football';
        } else if (pageTitle.includes('volleyball')) {
            return 'volleyball';
        }
        // Default to cricket if the page title doesn't match any specific sport
        return 'cricket';
    }

    // Fetch data for the current sport on page load
    fetchSportsData(currentSport);
});
