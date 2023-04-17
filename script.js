console.log("Welcome To Spotify");


//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/3.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
songItemPlay = document.getElementsByClassName("songItemPlay");

let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songname: "Faded -By Alan Walker", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songname: "Alone -By Alan Walker", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songname: "Stay", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songname: "Cherry Gum", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songname: "Where we Started Now", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songname: "End of Time", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songname: "Hangover", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songname: "Competition", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songname: "Where We Started Now", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    // { songname: "On & On", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {

    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;

    
});

let noOfSongs=document.getElementsByClassName("songItems");
let comm=noOfSongs.length;

function playsonG(){
    if(audioElement.played ) {
        audioElement.pause();
        songItems.classList.remove('fa-circle-pause');
        songItems.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
else {
        audioElement.play();
        songItems.classList.remove('fa-circle-play');
        songItems.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    } 
    
}

 for (var i = 0; i < comm; i++) {
  noOfSongs[i].addEventListener('click', playsonG, false);
}


// 🫰🫰🫰🫰🫰🫰🫰🫰
// var comments = document.getElementsByClassName('button');
// var numComments = comments.length;

// function showComment() {
//   var place = document.getElementById('textfield');
//   var commentBox = document.createElement('textarea');
//   place.appendChild(commentBox);
// }

// for (var i = 0; i < numComments; i++) {
//   comments[i].addEventListener('click', showComment, false);
// }





// 🐍🐍🐍🐍🐍🐍🐍

//Listen to events
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () => {
    //update seekbar

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();

            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        } else {
            audioElement.pause();
        }
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songname;

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

