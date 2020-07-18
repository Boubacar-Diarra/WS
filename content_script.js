
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      /*/console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");*/
      if (request.order == "extraire"){
        let data = {
            "prenom_nom" : document.getElementsByClassName("inline")[0].innerHTML
        }
        sendResponse({farewell: JSON.stringify(data)});
    }
    });