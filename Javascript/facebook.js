var database = [
    {
        userName: "Kenji",
        password: "Beepboop",
    },
    {
        userName: "sally",
        password: "123",
    },
    {
        userName: "ingrid",
        password: "777",
    },
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

function isUserValid(userName, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].userName === userName &&
            database[i].password === password) {
                return true;
            }

    }
    return false;
}

function signIn(userName, password) {
        if(isUserValid(userName, password)) {
                console.log(newsFeed);
            } else {
                alert("Sorry, wrong username and password");
            }

    }
//     if (user === database[0].userName && 
//         pass === database[0].password) { 
//             console.log(newsFeed);
//         } else {
//             alert("Sorry, wrong username and password");
//         }
// }

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);