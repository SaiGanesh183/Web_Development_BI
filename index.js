let users =[
{
    "name": "John Doe",
    "gender": "male",
    "image":"assets/john.png"
},
 {
    "name": "Jane Doe",
    "gender": "female",
    "image":"assets/jane.png"
 }
]

var index = 0;
function toggleUser() {
    index^=1;
    document.getElementById("user-name").innerText= users[index].name;
    document.getElementById("user-gender").innerText= users[index].gender;
    document.getElementById("user-image").src= users[index].image;
}