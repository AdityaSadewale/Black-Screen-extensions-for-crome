chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // Check if a custom "data attribute" exists to see if mode is ON
      if (document.body.getAttribute('data-dark-mode') === 'true') {
        // TURN OFF: Reset styles
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.body.style.filter = ""; 
        document.body.setAttribute('data-dark-mode', 'false');
      } else {
        // TURN ON: Set styles
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        
        // Optional: This line helps invert bright images if you want
        // document.body.style.filter = "contrast(0.8) brightness(0.8)";
        
        document.body.setAttribute('data-dark-mode', 'true');
      }
    }
  });
});