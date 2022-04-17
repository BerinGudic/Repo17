var users = [
    {id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male"},
    {id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female"},
    {id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
    {id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"}
    
];

function getUsers() {
    var output = "";
    for ( var i = 0; i < users.length; i++) {
        console.log(users[i]);
    };
    return output;
}

function findUserById(id) {
    var user = Object.assign(users);
    var iFindUser = user;
    return iFindUser;
}
getUsers();
console.log(findUserById());
module.exports = findUserById;