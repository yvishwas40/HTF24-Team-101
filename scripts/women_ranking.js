let allPlayers = [
    {name: 'Alyssa Healy', country: 'AUSTRALIA', rating: '785', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227611/alyssa-healy.jpg', format: 'T20'},
    {name: 'Natalie Sciver', country: 'ENGLAND', rating: '750', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227407/natalie-sciver.jpg', format: 'ODI'},
    {name: 'Beth Mooney', country: 'AUSTRALIA', rating: '748', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227619/beth-mooney.jpg', format: 'Test'},
    {name: 'Meg Lanning', country: 'AUSTRALIA', rating: '710', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227636/meg-lanning.jpg', format: 'T20'},
    {name: 'Laura Wolvaardt', country: 'NEW ZEALAND', rating: '707', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227559/laura-wolvaardt.jpg', format: 'ODI'},
    {name: 'Rachael Haynes', country: 'AUSTRALIA', rating: '701', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227640/rachael-haynes.jpg', format: 'T20'},
    {name: 'Amy Satterthwaite', country: 'SOUTH AFRICA', rating: '681', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227440/amy-satterthwaite.jpg', format: 'Test'},
    {name: 'Smriti Mandhana', country: 'INDIA', rating: '669', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227414/smriti-mandhana.jpg', format: 'ODI'},
    {name: 'Tammy Beaumont', country: 'ENGLAND', rating: '659', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227410/tammy-beaumont.jpg', format: 'T20'},
    {name: 'Ellyse Perry', country: 'AUSTRALIA', rating: '642', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227623/ellyse-perry.jpg', format: 'Test'},
    {name: 'Shafali Verma', country: 'INDIA', rating: '710', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227388/shafali-verma.jpg', format: 'ODI'},
    {name: 'Sophie Devine', country: 'NEW ZEALAND', rating: '694', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227452/sophie-devine.jpg', format: 'T20'},
    {name: 'Suzie Bates', country: 'NEW ZEALAND', rating: '652', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227453/suzie-bates.jpg', format: 'ODI'},
    {name: 'Chamari Athapaththu', country: 'SRI LANKA', rating: '629', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c150236/chamari-athapaththu.jpg', format: 'Test'},
    {name: 'Stafanie Taylor', country: 'WEST INDIES', rating: '618', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227438/stafanie-taylor.jpg', format: 'T20'},
    {name: 'Sophie Ecclestone', country: 'ENGLAND', rating: '771', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227409/sophie-ecclestone.jpg', format: 'ODI'},
    {name: 'Shabnim Ismail', country: 'SOUTH AFRICA', rating: '736', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227572/shabnim-ismail.jpg', format: 'T20'},
    {name: 'Jess Jonassen', country: 'AUSTRALIA', rating: '725', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227632/jess-jonassen.jpg', format: 'Test'},
    {name: 'Megan Schutt', country: 'AUSTRALIA', rating: '722', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227633/megan-schutt.jpg', format: 'ODI'},
    {name: 'Jhulan Goswami', country: 'INDIA', rating: '663', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227379/jhulan-goswami.jpg', format: 'T20'},
    {name: 'Marizanne Kapp', country: 'SOUTH AFRICA', rating: '655', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227562/marizanne-kapp.jpg', format: 'ODI'},
    {name: 'Ayabonga Khaka', country: 'SOUTH AFRICA', rating: '652', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227553/ayabonga-khaka.jpg', format: 'Test'},
    {name: 'Anya Shrubsole', country: 'ENGLAND', rating: '629', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227393/anya-shrubsole.jpg', format: 'T20'},
    {name: 'Kate Cross', country: 'ENGLAND', rating: '617', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227400/kate-cross.jpg', format: 'ODI'},
    {name: 'Hayley Matthews', country: 'WEST INDIES', rating: '612', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227428/hayley-matthews.jpg', format: 'T20'},
    {name: 'Sarah Glenn', country: 'ENGLAND', rating: '722', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c182026/sarah-glenn.jpg', format: 'ODI'},
    {name: 'Anam Amin', country: 'PAKISTAN', rating: '701', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227514/anam-amin.jpg', format: 'Test'},
    {name: 'Deepti Sharma', country: 'INDIA', rating: '692', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227376/deepti-sharma.jpg', format: 'T20'},
    {name: 'Katherine Brunt', country: 'ENGLAND', rating: '660', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227401/katherine-brunt.jpg', format: 'ODI'},
    {name: 'Amelia Kerr', country: 'NEW ZEALAND', rating: '652', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227439/amelia-kerr.jpg', format: 'T20'},
    {name: 'Nida Dar', country: 'PAKISTAN', rating: '632', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227536/nida-dar.jpg', format: 'ODI'},
    {name: 'Marizanne Kapp', country: 'SOUTH AFRICA', rating: '352', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227562/marizanne-kapp.jpg', format: 'Test'},
    {name: 'Ashleigh Gardner', country: 'AUSTRALIA', rating: '269', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227616/ashleigh-gardner.jpg', format: 'T20'},
    {name: 'Jess Jonassen', country: 'AUSTRALIA', rating: '245', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227632/jess-jonassen.jpg', format: 'ODI'},
    {name: 'Katherine Brunt', country: 'ENGLAND', rating: '221', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227401/katherine-brunt.jpg', format: 'T20'},
    {name: 'Megan Schutt', country: 'AUSTRALIA', rating: '299', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227633/megan-schutt.jpg', format: 'ODI'},
    {name: 'Shabnim Ismail', country: 'SOUTH AFRICA', rating: '214', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227572/shabnim-ismail.jpg', format: 'Test'}
];


// Initializing navbar, footer, etc.
import navbar from "../components/navbar.js";
let navbarAppend = document.getElementById("navbar1");
navbarAppend.innerHTML = navbar();

import navbar2 from "../components/navbar2.js";
let navbarAppend2 = document.getElementById("navbar2");
navbarAppend2.innerHTML = navbar2();

import footer from "../components/footer.js";
let footerOfCricbuzz = document.getElementById("footer_div");
footerOfCricbuzz.innerHTML = footer();

// Search input event listener
let searchInput = document.getElementById('search_input');
searchInput.addEventListener('input', function() {
    searchPlayers(searchInput.value);
});

// Function to search players based on input
function searchPlayers(searchTerm) {
    const filteredPlayers = allPlayers.filter(player => {
        return player.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    ranking(filteredPlayers); // Update the ranking display with the filtered players
}

// Initial ranking display
ranking(allPlayers);

// Function to display rankings
// Function to display rankings
function ranking(data) {
    let append_box = document.getElementById('append_box');
    append_box.innerHTML = ""; // Clear previous entries
    
    data.forEach(function(el) {
        let div = document.createElement('div');

        // Player's image
        let img_div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.image;
        img_div.append(img);
        img_div.setAttribute('class', 'img_div');

        // Player's name (as a hyperlink)
        let div1 = document.createElement('div');
        let name = document.createElement('h4');
        name.innerText = el.name;
        name.style.cursor = 'pointer'; // Change cursor to pointer
        name.addEventListener('mouseover', (event) => showProfileCard(el, event)); // Show profile card on hover
        name.addEventListener('mouseout', hideProfileCard); // Hide profile card when mouse leaves
        div1.setAttribute('class', 'name');
        div1.append(name);

        // Player's country
        let div2 = document.createElement('div');
        let country = document.createElement('p');
        country.innerText = el.country;
        div2.setAttribute('class', 'country');
        div2.append(country);

        // Player's rating
        let rating = document.createElement('p');
        rating.innerText = ` ${el.rating}`;
        rating.setAttribute('class', 'rating');
        rating.setAttribute('style', 'margin-bottom: 10px;'); // Add inline style for margin

        // Player's format
        let format = document.createElement('p');
        format.innerText = `${el.format}`; // Displaying the player's format
        format.setAttribute('class', 'format');
        format.setAttribute('style', 'margin-top: 50px;'); // Add inline style for margin

        // Append all elements to the main div
        div.append(img_div, div1, div2, rating, format); // Include format in the append
        append_box.append(div);
    });
}

// Function to show profile card
// Function to show profile card
function showProfileCard(player, event) {
    let profileCard = document.getElementById('profile_card');
    profileCard.innerHTML = `
        <img src="${player.image}" alt="Player Image" class="profile-image">
        <h3>${player.name}</h3>
        <p>Country: ${player.country}</p>
        <p>Rating: ${player.rating}</p>
        <p>Format: ${player.format}</p> <!-- Display the player's format -->
    `;
    profileCard.style.display = 'block';
    profileCard.style.position = 'absolute'; // Ensure it's positioned absolutely
    profileCard.style.left = `${event.pageX + 10}px`; // Adjust position
    profileCard.style.top = `${event.pageY + 10}px`; // Adjust position
}
// Function to hide profile card
function hideProfileCard() {
    document.getElementById('profile_card').style.display = 'none';
}
