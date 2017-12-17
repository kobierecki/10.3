$(function(){
    var carouselList = $("#carousel ul")

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }

    function changeSlide() {
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    };

    var setCarouselIntervalVar;

    function setCarouselInterval() {
      setCarouselIntervalVar = setInterval(changeSlide, 3000);
    };

    function moveSlideBack(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-400});
    }

    setCarouselInterval();

    //ARROWS HANDLER

    $("#js-right-arrow").click(function(){
        clearInterval(setCarouselIntervalVar);
        changeSlide();
        setCarouselInterval();
    });

    $("#js-left-arrow").click(function(){
        clearInterval(setCarouselIntervalVar); 
        moveSlideBack();
        carouselList.animate({'marginLeft':0}, 500);
        setCarouselInterval();
    });

    //PAGINATION 

    var slidesArray = document.getElementsByClassName('js-change-slide');

    $('.js-change-slide').click(function(slidesArray){
        var firstItem = carouselList.find('li:first');
        var curentSlide = firstItem.attr('data-num');
        var clickedButton = $(this).attr('data-num');

        clearInterval(setCarouselIntervalVar); 

        if (curentSlide > clickedButton) {
            var slidesDifference = curentSlide - clickedButton;
            for(var i = slidesDifference; i > 0; i--) {
                moveSlideBack();
            } 
            carouselList.animate({'marginLeft':0}, 500);
            setCarouselInterval();
        } else {
            var slidesDifference = clickedButton - curentSlide;
            clearInterval(setCarouselIntervalVar);
            for(var i = slidesDifference; i > 0; i--) {
                carouselList.animate({'marginLeft':-400}, 400, moveFirstSlide);
            }
            setCarouselInterval();
        }
    });
        
});
