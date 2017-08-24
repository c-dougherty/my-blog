// Add new post
var postButton = document.getElementById('postButton');
postButton.onclick = function(){
    var postText = document.getElementById('postText');
    var par = document.createElement("pre");
    par.textContent = postText.value;
    document.body.appendChild(par);
};