(function(){
    var allCards = document.querySelectorAll('.card');

    allCards.forEach(function(card) {
        // elements
        var btn = card.querySelector('.btn');

        // https://stackoverflow.com/questions/43193341/how-to-generate-random-pastel-or-brighter-color-in-javascript
        var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' + 
                 (65 + 10 * Math.random()) + '%)';
        
        if (btn) {
            btn.style.backgroundColor = cssHSL;
        }
    })
})();

(function(){
    var allCards = document.querySelectorAll('.card');

    allCards.forEach(function(card) {
        // elements
        var btn = card.querySelector('.btn');
        var h2 = card.querySelector('.card__title');

        // https://stackoverflow.com/questions/43193341/how-to-generate-random-pastel-or-brighter-color-in-javascript
        var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' + 
                 (50 + 10 * Math.random()) + '%)';
        
        if (btn && h2) {
            btn.style.backgroundColor = cssHSL;
            h2.style.color = cssHSL;
        }
        
    });


    // Handle pages
    var links = document.querySelectorAll("[data-show]");
    links.forEach(function(link) {
        link.addEventListener('click', function(e){
            var page_id = e.currentTarget.getAttribute('data-show');
            showPage(page_id);
        })
    })

    var pages = document.querySelectorAll(".page");
    
    function showPage(page_id) {
        pages.forEach(function(page){
            if (page.id != page_id) {
                page.classList.remove("page-active");
            } else {
                page.classList.add("page-active");
            }
        });
    }

    
})();