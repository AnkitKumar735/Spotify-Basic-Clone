console.log("Welcome to Spotify")

let songindex=0;
let audioelement = new Audio('S1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName("songitem"));
let songs=[
    {
        songname: "Samjhawan" , filepath:"S1.mp3",coverpath:"COVER1.jpg"
    },
    {
        songname: "Heeriye" , filepath:"S2.mp3",coverpath:"COVER2.jpg"
    },
    {
        songname: "Jedha Nasha" , filepath:"S3.mp3",coverpath:"COVER3.jpg"
    },
    {
        songname: "chal chaiya chaiya" , filepath:"S4.mp3",coverpath:"COVER4.jpg"
    },
    {
        songname: "Tere hawale" , filepath:"S5.mp3",coverpath:"COVER5.jpg"
    },
    
]


songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

//audioelement.play();

masterplay.addEventListener('click' , ()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioelement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;
   
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value* audioelement.duration/100;
    
})


const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (element)=>{
        makeallplays();
        
        songindex = parseInt(element.target.id);
        element.target.classList.remove('fa-play-circle');
        element.target.classList.add('fa-pause-circle');
        audioelement.src= `S${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex=0
    }
    else{
      songindex +=1;
    }
    audioelement.src= `S${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
      songindex -=1;
    }
    audioelement.src= `S${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})
