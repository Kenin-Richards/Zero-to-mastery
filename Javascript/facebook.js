var database = [
    {
        userName: "Kenji",
        password: "Beepboop",
    }
];

var newsFeed = [
    {
        userName: "Jim",
        timeline: "I like apples",
    },
    {
        userName: "Burrito",
        timeline: "I want salsa",
    },
    {
        userName: "Gary",
        timeline: "Yo yo yo",
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].userName && 
        pass === database[0].password) { 
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password");
        }
}

signIn(userNamePrompt, passwordPrompt);