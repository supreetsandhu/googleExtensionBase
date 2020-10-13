function click(e){
    chrome.tabs.executeScript(null,
        {code: "document.body.style.backgroundImage='url(" + images[e.target.id]
        +"'"});
        window.close();   
}

document.addEventListener('DOMContentLoaded', function(){

    var divs = document.querySelectorAll('div');
    for( var i = 0; i< divs.length; i++){
        divs[i].addEventListener('click', click);
    }
});


var images = {
    love: 'pink.jpeg', 
    youMatter: 'ocean.jpeg'
}