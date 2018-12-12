/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Song of the Germans",
    "March of the Volunteers",
    "The Star-Spangled Banner",
    "O Canada",
    "Be Glorious, our free Motherland"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    "https://images-na.ssl-images-amazon.com/images/I/41CERZKNYQL._SX425_.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png"
    ];

var artists = [
    "August Heinrich Hoffmann von Fallersleben",
    "Tian Han",
    "Francis Scott Key",
    "Adolphe-Basile Routhier",
    "Sergey Mikhalkov"
    ];

var songLengths = [
    "1:31",
    "1:27",
    "1:21",
    "1:26",
    "3:44"
    ];
    
var links = [
    "https://www.youtube.com/watch?v=P46fpud7gyU",
    "https://www.youtube.com/watch?v=UctriMuXYS0",
    "https://www.youtube.com/watch?v=oqq7ALCDGFc",
    "https://www.youtube.com/watch?v=kRPGPAnPNa8",
    "https://www.youtube.com/watch?v=U06jlgpMtQs"
    ];





function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    images_links.forEach(function(images_links) {
        $("#images").append("<p>" + images_links + "</p>"); 
    });
    
     artists.forEach(function(artists) {
        $("#artists").append("<p>" + artists + "</p>"); 
    });
    
     links.forEach(function(links) {
        $("#links").append("<p>" + links + "</p>"); 
    });
    
     songLengths.forEach(function(songLengths) {
        $("#lengths").append("<p>" + songLengths + "</p>"); 
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#lengths").empty();
    $("#links").empty();
    $("#artists").empty();
    $("#images").empty();
}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
