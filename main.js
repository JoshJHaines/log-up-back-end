// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = "colin.jaffe@codeimmersives.com";
const password1 = "Hotforhimself";
const user2 = "mesuara@codeimmersives.com";
const password2 = "Console.logger";
const user3 = "anthony@codeimmersives.com";
const password3 = "like a BOSS";

// **YOUR** code below. Pass those tests!

function isValidEmail(userEmail) {
  const split = userEmail.indexOf(["@"]);
  const domain = userEmail.split(userEmail[split]);


  if (domain[1] === "codeimmersives.com" && userEmail[0] !== "@") {
    return true;
  } else {
    return false;
  }
}

isValidEmail(user1)

function isValidPassword(userPassword) {
  if (userPassword.length >= 8 && userPassword.match(/[a-z]/) && userPassword.match(/[A-Z]/)) {
    return true;
  } else {
    return false;
  }
}

function isRegisteredUser(userEmail){
  if (userEmail === user1 || userEmail === user2 || userEmail === user3 ){
    return true
  } else {
    return false
  }
}

function passwordMatches(str1 , str2){
  if(str1 === user1 && str2 === password1|| str1 ===user2 && str2=== password2 || str1 === user3 && str2 === password3){
    return true;
  }else{
    return false;
  }
}

// Our code below. Do not touch!

if (typeof isValidEmail === "undefined") {
  isValidEmail = undefined;
}

if (typeof isValidPassword === "undefined") {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === "undefined") {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === "undefined") {
  passwordMatches = undefined;
}

if (typeof user1 === "undefined") {
  user1 = undefined;
}

if (typeof user2 === "undefined") {
  user2 = undefined;
}

if (typeof user3 === "undefined") {
  user3 = undefined;
}

if (typeof password1 === "undefined") {
  password1 = undefined;
}

if (typeof password2 === "undefined") {
  password2 = undefined;
}

if (typeof password3 === "undefined") {
  password3 = undefined;
}

module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
};
