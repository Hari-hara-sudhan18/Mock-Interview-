// search.js
const searchForm = document.getElementById('search-form');
const searchResultsDiv = document.getElementById('search-results');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;

    // Call Skyscanner API to get search results
    unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + origin + "/" + destination + "/" + departureDate + "?inboundpartialdate=" + returnDate)
        .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")

    .end((result) => {
        const searchResults = result.body.Quotes;
        const searchResultsHtml = searchResults.map((result) => {
            return `
          <div>
            <h3>${result.Carrier}</h3>
            <p>Departure: ${result.OutboundLeg.Departure}</p>
            <p>Return: ${result.OutboundLeg.Return}</p>
            <p>Price: ${result.MinPrice}</p>
          </div>
        `;
        }).join('');
        searchResultsDiv.innerHTML = searchResultsHtml;
    });
});