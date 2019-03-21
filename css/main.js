// create an enroll list

function enrollList() {
    var item = document.getElementById("enrolltodayInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('enrollList').appendChild(newItem);
}