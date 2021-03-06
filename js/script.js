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
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png",
    "https://images-na.ssl-images-amazon.com/images/I/41CERZKNYQL._SX425_.jpg"
    
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

$("#add").click(function(){
    var newFlag= $("#image").val();
    images_links.push(newFlag);
    for (var i=0; i < images_links.length; i++){
        $('#pic').append(images_links[i]);
    }

    var newSong= $("#song").val();
    songs.push(newSong);
    for (var i=0; i < songs.length; i++){
        $('#music').append(songs[i]);
    }
    
    var newArtist= $("#artist").val();
    artists.push(newArtist);
    for (var i=0; i < artists.length; i++){
        $('#composer').append(artists[i]);
    }
    
    var newLength= $("#length").val();
    songLengths.push(newLength);
    for (var i=0; i < songLengths.length; i++){
        $('#duration').append(songLengths[i]);
    }
    
    var newLink= $("#link").val();
    links.push(newLink);
    for (var i=0; i < links.length; i++){
        $('#url').append(links[i]);
    }

});







function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    images_links.forEach(function(images_links) {
        $("#images").append("<img src=" + images_links + ">"); 
    });
    
     artists.forEach(function(artists) {
        $("#artists").append("<p>" + artists + "</p>"); 
    });
    
     links.forEach(function(link) {
        $("#links").append("<a href="+ link +">Click here to listen</a>"); 
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


