let allPlayers = [
    // Batting
    {name: 'Joe Root', country: 'ENGLAND', rating: '897', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170942/joe-root.jpg', format: 'Test'},
    {name: 'Marnus Labuschagne', country: 'AUSTRALIA', rating: '892', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c184115/marnus-labuschagne.jpg', format: 'Test'},
    {name: 'Steven Smith', country: 'AUSTRALIA', rating: '845', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170624/steven-smith.jpg', format: 'Test'},
    {name: 'Babar Azam', country: 'PAKISTAN', rating: '815', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170768/babar-azam.jpg', format: 'Test'},
    {name: 'Kane Williamson', country: 'NEW ZEALAND', rating: '798', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170733/kane-williamson.jpg', format: 'Test'},
    {name: 'Dimuth Karunaratne', country: 'SRI LANKA', rating: '772', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170700/dimuth-karunaratne.jpg', format: 'Test'},
    {name: 'Usman Khawaja', country: 'AUSTRALIA', rating: '757', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170640/usman-khawaja.jpg', format: 'Test'},
    {name: 'Rohit Sharma', country: 'INDIA', rating: '754', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170658/rohit-sharma.jpg', format: 'Test'},
    {name: 'Travis Head', country: 'AUSTRALIA', rating: '744', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c147703/travis-head.jpg', format: 'Test'},
    {name: 'Virat Kohli', country: 'INDIA', rating: '742', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170661/virat-kohli.jpg', format: 'Test'},

    {name: 'Babar Azam', country: 'PAKISTAN', rating: '892', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170768/babar-azam.jpg', format: 'ODI'},
    {name: 'Imam-ul-Haq', country: 'PAKISTAN', rating: '815', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170765/imam-ul-haq.jpg', format: 'ODI'},
    {name: 'Virat Kohli', country: 'INDIA', rating: '811', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170661/virat-kohli.jpg', format: 'ODI'},
    {name: 'Rohit Sharma', country: 'INDIA', rating: '791', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170658/rohit-sharma.jpg', format: 'ODI'},
    {name: 'Quinton de Kock', country: 'SOUTH AFRICA', rating: '789', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170698/quinton-de-kock.jpg', format: 'ODI'},
    {name: 'Ross Taylor', country: 'NEW ZEALAND', rating: '775', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170729/ross-taylor.jpg', format: 'ODI'},
    {name: 'Rassie van der Dussen', country: 'SOUTH AFRICA', rating: '769', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170691/rassie-van-der-dussen.jpg', format: 'ODI'},
    {name: 'Jonny Bairstow', country: 'ENGLAND', rating: '746', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170976/jonny-bairstow.jpg', format: 'ODI'},
    {name: 'Aaron Finch', country: 'AUSTRALIA', rating: '745', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170630/aaron-finch.jpg', format: 'ODI'},
    {name: 'David Warner', country: 'AUSTRALIA', rating: '737', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170635/david-warner.jpg', format: 'ODI'},

    {name: 'Babar Azam', country: 'PAKISTAN', rating: '818', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170768/babar-azam.jpg', format: 'T20'},
    {name: 'Mohammad Rizwan', country: 'PAKISTAN', rating: '794', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c202222/mohammad-rizwan.jpg', format: 'T20'},
    {name: 'Aiden Markram', country: 'SOUTH AFRICA', rating: '772', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170645/aiden-markram.jpg', format: 'T20'},
    {name: 'Dawid Malan', country: 'ENGLAND', rating: '728', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c180927/dawid-malan.jpg', format: 'T20'},
    {name: 'Aaron Finch', country: 'AUSTRALIA', rating: '716', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170630/aaron-finch.jpg', format: 'T20'},
    {name: 'Devon Conway', country: 'NEW ZEALAND', rating: '703', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c207888/devon-conway.jpg', format: 'T20'},
    {name: 'Ishan Kishan', country: 'INDIA', rating: '689', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c226219/ishan-kishan.jpg', format: 'T20'},
    {name: 'Rassie van der Dussen', country: 'SOUTH AFRICA', rating: '673', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170691/rassie-van-der-dussen.jpg', format: 'T20'},
    {name: 'Pathum Nissanka', country: 'SRI LANKA', rating: '661', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c216501/pathum-nissanka.jpg', format: 'T20'},
    {name: 'Martin Guptill', country: 'NEW ZEALAND', rating: '658', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170731/martin-guptill.jpg', format: 'T20'},

    // Bowling
    {name: 'Pat Cummins', country: 'AUSTRALIA', rating: '901', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170651/pat-cummins.jpg', format: 'Test'},
    {name: 'Ravichandran Ashwin', country: 'INDIA', rating: '850', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c153372/ravichandran-ashwin.jpg', format: 'Test'},
    {name: 'Jasprit Bumrah', country: 'INDIA', rating: '830', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170685/jasprit-bumrah.jpg', format: 'Test'},
    {name: 'Shaheen Afridi', country: 'PAKISTAN', rating: '827', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170802/shaheen-afridi.jpg', format: 'Test'},
    {name: 'Tim Southee', country: 'NEW ZEALAND', rating: '790', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170727/tim-southee.jpg', format: 'Test'},
    {name: 'Josh Hazlewood', country: 'AUSTRALIA', rating: '789', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170645/josh-hazlewood.jpg', format: 'Test'},
    {name: 'Trent Boult', country: 'NEW ZEALAND', rating: '786', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170736/trent-boult.jpg', format: 'Test'},
    {name: 'Kagiso Rabada', country: 'SOUTH AFRICA', rating: '783', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170759/kagiso-rabada.jpg', format: 'Test'},
    {name: 'James Anderson', country: 'ENGLAND', rating: '781', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170639/james-anderson.jpg', format: 'Test'},
    {name: 'Neil Wagner', country: 'NEW ZEALAND', rating: '775', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170728/neil-wagner.jpg', format: 'Test'},

    {name: 'Josh Hazlewood', country: 'AUSTRALIA', rating: '839', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170645/josh-hazlewood.jpg', format: 'ODI'},
    {name: 'Bumrah', country: 'INDIA', rating: '807', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170685/jasprit-bumrah.jpg', format: 'ODI'},
    {name: 'Shaheen Afridi', country: 'PAKISTAN', rating: '804', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170802/shaheen-afridi.jpg', format: 'ODI'},
    {name: 'Kagiso Rabada', country: 'SOUTH AFRICA', rating: '784', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170759/kagiso-rabada.jpg', format: 'ODI'},
    {name: 'Anrich Nortje', country: 'SOUTH AFRICA', rating: '764', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c207164/anrich-nortje.jpg', format: 'ODI'},
    {name: 'Mitchell Starc', country: 'AUSTRALIA', rating: '760', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170637/mitchell-starc.jpg', format: 'ODI'},
    {name: 'Mohammad Nabi', country: 'AFGHANISTAN', rating: '755', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c184147/mohammad-nabi.jpg', format: 'ODI'},
    {name: 'Mohammed Shami', country: 'INDIA', rating: '754', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170683/mohammed-shami.jpg', format: 'ODI'},
    {name: 'Lockie Ferguson', country: 'NEW ZEALAND', rating: '753', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170732/lockie-ferguson.jpg', format: 'ODI'},

    {name: 'Shakib Al Hasan', country: 'BANGLADESH', rating: '824', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170746/shakib-al-hasan.jpg', format: 'T20'},
    {name: 'Ravindra Jadeja', country: 'INDIA', rating: '804', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170675/ravindra-jadeja.jpg', format: 'T20'},
    {name: 'Hardik Pandya', country: 'INDIA', rating: '795', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170647/hardik-pandya.jpg', format: 'T20'},
    {name: 'Mohammad Nabi', country: 'AFGHANISTAN', rating: '787', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c184147/mohammad-nabi.jpg', format: 'T20'},
    {name: 'Jason Holder', country: 'WEST INDIES', rating: '775', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170683/jason-holder.jpg', format: 'T20'},
    {name: 'Glenn Maxwell', country: 'AUSTRALIA', rating: '764', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170646/glenn-maxwell.jpg', format: 'T20'},
    {name: 'Mitchell Marsh', country: 'AUSTRALIA', rating: '763', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170636/mitchell-marsh.jpg', format: 'T20'},
    {name: 'Shadab Khan', country: 'PAKISTAN', rating: '758', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170812/shadab-khan.jpg', format: 'T20'},
    {name: 'Dwayne Bravo', country: 'WEST INDIES', rating: '754', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170718/dwayne-bravo.jpg', format: 'T20'},

    // All-rounders
    {name: 'Shakib Al Hasan', country: 'BANGLADESH', rating: '891', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170746/shakib-al-hasan.jpg', format: 'Test'},
    {name: 'Ravindra Jadeja', country: 'INDIA', rating: '780', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170675/ravindra-jadeja.jpg', format: 'Test'},
    {name: 'Jason Holder', country: 'WEST INDIES', rating: '775', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170683/jason-holder.jpg', format: 'Test'},
    {name: 'Hardik Pandya', country: 'INDIA', rating: '765', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170647/hardik-pandya.jpg', format: 'Test'},
    {name: 'Mohammad Nabi', country: 'AFGHANISTAN', rating: '762', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c184147/mohammad-nabi.jpg', format: 'Test'},
    {name: 'Mitchell Marsh', country: 'AUSTRALIA', rating: '754', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170636/mitchell-marsh.jpg', format: 'Test'},
    {name: 'Ben Stokes', country: 'ENGLAND', rating: '754', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170653/ben-stokes.jpg', format: 'Test'},
    {name: 'Shadab Khan', country: 'PAKISTAN', rating: '740', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170812/shadab-khan.jpg', format: 'Test'},
    {name: 'Glenn Maxwell', country: 'AUSTRALIA', rating: '735', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170646/glenn-maxwell.jpg', format: 'Test'},
    {name: 'Dwayne Bravo', country: 'WEST INDIES', rating: '724', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170718/dwayne-bravo.jpg', format: 'Test'},

    {name: 'Shakib Al Hasan', country: 'BANGLADESH', rating: '891', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170746/shakib-al-hasan.jpg', format: 'ODI'},
    {name: 'Ravindra Jadeja', country: 'INDIA', rating: '780', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170675/ravindra-jadeja.jpg', format: 'ODI'},
    {name: 'Jason Holder', country: 'WEST INDIES', rating: '775', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170683/jason-holder.jpg', format: 'ODI'},
    {name: 'Hardik Pandya', country: 'INDIA', rating: '765', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170647/hardik-pandya.jpg', format: 'ODI'},
    {name: 'Mohammad Nabi', country: 'AFGHANISTAN', rating: '762', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c184147/mohammad-nabi.jpg', format: 'ODI'},
    {name: 'Mitchell Marsh', country: 'AUSTRALIA', rating: '754', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170636/mitchell-marsh.jpg', format: 'ODI'},
    {name: 'Ben Stokes', country: 'ENGLAND', rating: '754', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170653/ben-stokes.jpg', format: 'ODI'},
    {name: 'Shadab Khan', country: 'PAKISTAN', rating: '740', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170812/shadab-khan.jpg', format: 'ODI'},
    {name: 'Glenn Maxwell', country: 'AUSTRALIA', rating: '735', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170646/glenn-maxwell.jpg', format: 'ODI'},
    {name: 'Dwayne Bravo', country: 'WEST INDIES', rating: '724', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170718/dwayne-bravo.jpg', format: 'ODI'},

    {name: 'Shakib Al Hasan', country: 'BANGLADESH', rating: '896', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170746/shakib-al-hasan.jpg', format: 'T20'},
    {name: 'Ravindra Jadeja', country: 'INDIA', rating: '774', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170675/ravindra-jadeja.jpg', format: 'T20'},
    {name: 'Jason Holder', country: 'WEST INDIES', rating: '771', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170683/jason-holder.jpg', format: 'T20'},
    {name: 'Hardik Pandya', country: 'INDIA', rating: '764', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170647/hardik-pandya.jpg', format: 'T20'},
    {name: 'Mohammad Nabi', country: 'AFGHANISTAN', rating: '760', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c184147/mohammad-nabi.jpg', format: 'T20'},
    {name: 'Mitchell Marsh', country: 'AUSTRALIA', rating: '752', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170636/mitchell-marsh.jpg', format: 'T20'},
    {name: 'Ben Stokes', country: 'ENGLAND', rating: '750', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170653/ben-stokes.jpg', format: 'T20'},
    {name: 'Shadab Khan', country: 'PAKISTAN', rating: '747', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170812/shadab-khan.jpg', format: 'T20'},
    {name: 'Glenn Maxwell', country: 'AUSTRALIA', rating: '740', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170646/glenn-maxwell.jpg', format: 'T20'},
    {name: 'Dwayne Bravo', country: 'WEST INDIES', rating: '720', image: 'https://www.cricbuzz.com/a/img/v1/50x50/i1/c170718/dwayne-bravo.jpg', format: 'T20'},
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
