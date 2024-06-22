function addUser()
{
    var username = document.getElementById("username-input").value;
    localStorage.setItem("usernamekey", username);
    window.location = "kwitter-room.html";
}