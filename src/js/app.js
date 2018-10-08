(function(){
    var allCards = document.querySelectorAll('.card');

    allCards.forEach(function(card) {
        // elements
        var btn = card.querySelector('.btn');

        // https://stackoverflow.com/questions/43193341/how-to-generate-random-pastel-or-brighter-color-in-javascript
        var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' + 
                 (85 + 10 * Math.random()) + '%)';
        
        if (btn) {
            btn.style.backgroundColor = cssHSL;
        }
    })
})();