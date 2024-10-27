let allPlayers = [
    {name: 'Alyssa Healy', country: 'AUSTRALIA', rating: '785', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227611/alyssa-healy.jpg'},
    {name: 'Natalie Sciver', country: 'ENGLAND', rating: '750', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227407/natalie-sciver.jpg'},
    {name: 'Beth Mooney', country: 'AUSTRALIA', rating: '748', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227619/beth-mooney.jpg'},
    {name: 'Meg Lanning', country: 'AUSTRALIA', rating: '710', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227636/meg-lanning.jpg'},
    {name: 'Laura Wolvaardt', country: 'NEW ZEALAND', rating: '707', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227559/laura-wolvaardt.jpg'},
    {name: 'Rachael Haynes', country: 'AUSTRALIA', rating: '701', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227640/rachael-haynes.jpg'},
    {name: 'Amy Satterthwaite', country: 'SOUTH AFRICA', rating: '681', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227440/amy-satterthwaite.jpg'},
    {name: 'Smriti Mandhana', country: 'INDIA', rating: '669', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227414/smriti-mandhana.jpg'},
    {name: 'Tammy Beaumont', country: 'ENGLAND', rating: '659', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227410/tammy-beaumont.jpg'},
    {name: 'Ellyse Perry', country: 'AUSTRALIA', rating: '642', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227623/ellyse-perry.jpg'},
    {name: 'Shafali Verma', country: 'INDIA', rating: '710', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227388/shafali-verma.jpg'},
    {name: 'Sophie Devine', country: 'NEW ZEALAND', rating: '694', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227452/sophie-devine.jpg'},
    {name: 'Suzie Bates', country: 'NEW ZEALAND', rating: '652', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227453/suzie-bates.jpg'},
    {name: 'Chamari Athapaththu', country: 'SRI LANKA', rating: '629', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c150236/chamari-athapaththu.jpg'},
    {name: 'Stafanie Taylor', country: 'WEST INDIES', rating: '618', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227438/stafanie-taylor.jpg'},
    {name: 'Sophie Ecclestone', country: 'ENGLAND', rating: '771', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227409/sophie-ecclestone.jpg'},
    {name: 'Shabnim Ismail', country: 'SOUTH AFRICA', rating: '736', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227572/shabnim-ismail.jpg'},
    {name: 'Jess Jonassen', country: 'AUSTRALIA', rating: '725', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227632/jess-jonassen.jpg'},
    {name: 'Megan Schutt', country: 'AUSTRALIA', rating: '722', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227633/megan-schutt.jpg'},
    {name: 'Jhulan Goswami', country: 'INDIA', rating: '663', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227379/jhulan-goswami.jpg'},
    {name: 'Marizanne Kapp', country: 'SOUTH AFRICA', rating: '655', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227562/marizanne-kapp.jpg'},
    {name: 'Ayabonga Khaka', country: 'SOUTH AFRICA', rating: '652', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227553/ayabonga-khaka.jpg'},
    {name: 'Anya Shrubsole', country: 'ENGLAND', rating: '629', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227393/anya-shrubsole.jpg'},
    {name: 'Kate Cross', country: 'ENGLAND', rating: '617', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227400/kate-cross.jpg'},
    {name: 'Hayley Matthews', country: 'WEST INDIES', rating: '612', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227428/hayley-matthews.jpg'},
    {name: 'Sarah Glenn', country: 'ENGLAND', rating: '722', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c182026/sarah-glenn.jpg'},
    {name: 'Anam Amin', country: 'PAKISTAN', rating: '701', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227514/anam-amin.jpg'},
    {name: 'Deepti Sharma', country: 'INDIA', rating: '692', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227376/deepti-sharma.jpg'},
    {name: 'Katherine Brunt', country: 'ENGLAND', rating: '660', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227401/katherine-brunt.jpg'},
    {name: 'Amelia Kerr', country: 'NEW ZEALAND', rating: '652', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227439/amelia-kerr.jpg'},
    {name: 'Nida Dar', country: 'PAKISTAN', rating: '632', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227536/nida-dar.jpg'},
    {name: 'Marizanne Kapp', country: 'SOUTH AFRICA', rating: '352', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227562/marizanne-kapp.jpg'},
    {name: 'Ashleigh Gardner', country: 'AUSTRALIA', rating: '269', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227616/ashleigh-gardner.jpg'},
    {name: 'Jess Jonassen', country: 'AUSTRALIA', rating: '245', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227632/jess-jonassen.jpg'},
    {name: 'Katherine Brunt', country: 'ENGLAND', rating: '221', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227401/katherine-brunt.jpg'},
    {name: 'Jhulan Goswami', country: 'INDIA', rating: '217', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227379/jhulan-goswami.jpg'},
    {name: 'Nattaya Boochatham', country: 'THAILAND', rating: '256', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c182026/nattaya-boochatham.jpg'},
    {name: 'Chamari Athapaththu', country: 'SRI LANKA', rating: '264', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c150236/chamari-athapaththu.jpg'},
    {name: 'Megan Schutt', country: 'AUSTRALIA', rating: '299', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227633/megan-schutt.jpg'},
    {name: 'Shabnim Ismail', country: 'SOUTH AFRICA', rating: '214', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c227572/shabnim-ismail.jpg'},
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

        // Player's name
        let div1 = document.createElement('div');
        let name = document.createElement('h4');
        name.innerText = el.name;
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
        rating.innerText = el.rating;
        rating.setAttribute('class', 'rating');

        // Append all elements to the main div
        div.append(img_div, div1, div2, rating);
        append_box.append(div);
    });
}

// Initial call to display all players
ranking(allPlayers);