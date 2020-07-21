//condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = 
    "Your account # is" + (isUserValid(false) ? "123" : "not available")