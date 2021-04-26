'use strict'

// getToday();
// getUserName();
// getFavName();

function getToday() {
    let today = new Date();
    console.log('today: ' + today);
    let hournow = today.getHours();
    console.log('hours: ' + hournow);
    let greeting;

    if (hourNow> 18) {
        greeting = 'good Evening!';
    }else if (hourNow > 12) {
        greeting = 'Good Afternoon!';
    }else if (hournow >= 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Welcome!'
    }

    document.write('<h3>' + '</h3>')


}

function getUserName(){
    let getUserName = prompt("Welcome! Please Enter Name Here!")
    document.write('<h2>' + userName + '</h2>')
    return userName;
}

function addPictures(){
    let numberOFPictures = prompt('How Many Stoogies Can I Offer You?');
    let url = "https://media.istockphoto.com/photos/whiskey-with-ice-and-cigar-picture-id827879552?k=6&m=827879552&s=612x612&w=0&h=pMfaiikv_lP06jNcviPe8_Twg3R0KuKOUHr86-Ym094="
    for(let i =0; i < numberOFPictures; i ++){
        document.write('<img src="' + '" >');
    }
}

function getFavDrink(){
    let favDrink = prompt ("What kind of drink do you prefer?\Straight up?\Iced?");

    if (favDrink.toLowerCase() == "Straight up"){
        document.write("<h2>Great Choice!</h2>")
    } else {
        document.write("<h2>Noone was born with hair on their chest</h2>")
    }
}

