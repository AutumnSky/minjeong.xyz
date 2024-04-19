document.addEventListener("DOMContentLoaded", function() {
    // Function to load JSON file
    function loadJSON(callback) {   
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'https://minjeong.xyz/data.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == 200) {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);  
    }

    // Function to display JSON data
    function displayData(data) {
        var jsonContainer = document.getElementById('json-container');
        jsonContainer.textContent = data;
    }

    // Load JSON file and display its content
    loadJSON(function(response) {
        var jsonData = JSON.parse(response);
        displayData(JSON.stringify(jsonData, null, 2)); // Indented and formatted JSON
    });
});