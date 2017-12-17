$(function(){
    var carouselList = $("#carousel ul")

    //co tu sie dzieje
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

    $('#js-change-slide').click(function(){
        console.log("ck");
    });
        
});
