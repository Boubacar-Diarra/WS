window.onload = () => {
    document.getElementById('extraire').onclick = () =>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {order: "extraire"}, function(response) {
              //console.log(response.farewell);
              //une fois arrivé ici, on sauvegarde dans la base de donnée
              alert(response.farewell)
            });
          });
    }
}