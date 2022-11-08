chrome.tabs.onUpdated.addListener(()=>{
    chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
        let url = tabs[0].url;
        
        if (url.startsWith("https://www.youtube.com/shorts")){
            chrome.tabs.reload()


        }
    });



}
)


