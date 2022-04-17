var users = [
    {firstName: "John", lastName: "Doe", age: 24, gender: "male"},
    {firstName: "Jane", lastName: "Doe", age: 5, gender: "female"},
    {firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
    {firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"}
    
];

function getUsers() {
    var output = "";
    for ( var i = 0; i < users.length; i++) {
        console.log(users[i]);
    };
    return output;
}

function findUser(lastName, gender) {
    try {
        var user = Object.assign(users);
        var iFindUser = firstName + " " + lastName + " is " + age + ", " + gender;
        return iFindUser;
    }
    catch (error) {
        console.log(error);
        console.log("Cannot read property 'firstName' of undefined");
    };
}

getUsers();
console.log(findUser(users));
module.exports = findUser;