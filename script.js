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

    setCarouselInterval();

    //ARROWS HANDLER

    $("#js-left-arrow").click()

    $("#js-right-arrow").click()
})