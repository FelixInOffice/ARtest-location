AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            alert("test");
        });
}});