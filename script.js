var score1 = document.querySelector('.score1'); //emp
var score2 = document.querySelector('.score2'); //syn
var score3 = document.querySelector('.score3'); //bo
var score4 = document.querySelector('.score4'); //loa
var totevent = document.querySelector('.event');

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://boh.froshtiet.com/mentorsonly/score');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText); 
    console.log(ourData.clans[0].name);
    for(let i=0; i<4; i++){
        if(ourData.clans[i].name === "theEmpire") score1.textContent = ourData.clans[i].score;
        else if(ourData.clans[i].name === "theSyndicate") score2.textContent = ourData.clans[i].score;
        else if(ourData.clans[i].name === "blackOrder") score3.textContent = ourData.clans[i].score;
        else if(ourData.clans[i].name === "theLeagueOfAssassins") score4.textContent = ourData.clans[i].score;
    }
    for(var i=0; i<ourData.events.length; i++){
        totevent.innerHTML += "<a target=”_blank” href=" +ourData.events[i].link + ">" + <h2>ourData.events[i].name</h2> + "</a>";
        console.log(ourData.events[i].name);
    }
};


ourRequest.send();
