const carousel = document.getElementById('carouselExampleFade');

const indicators = document.querySelectorAll('.nintendo-indicator');

carousel.addEventListener('slide.bs.carousel', function(){

    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });

});

carousel.addEventListener('slid.bs.carousel', function(e){

    const activeIndicator = indicators[e.to];

    if(activeIndicator){

        activeIndicator.classList.add('active');

    }

});