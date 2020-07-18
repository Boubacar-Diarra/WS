const { axios } = require("./axios.min");

window.onload = () => {
    document.getElementById('extraire').onclick = () =>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {order: "extraire"}, function(response) {
              let xhttp = new XMLHttpRequest();
              /*xhttp.open("POST", "https://localhost:44388/api/profit");
              xhttp.send();*/
              axios.post("https://localhost:44388/api/profit", JSON.parse(response.farewell));
              //console.log(response.farewell);
              //une fois arrivé ici, on sauvegarde dans la base de donnée
              alert(response.farewell)
            });
          });
    }
}
