window.onload = () => {
    const scene = document.querySelector('a-scene');
    // add place icon
    const icon = document.createElement('a-image');
    icon.setAttribute('gps-entity-place', `latitude: 22.2800551; longitude: 114.171857;`);
    icon.setAttribute('name', place.name);
    icon.setAttribute('src', './test.png');
    icon.setAttribute('scale', '0.5, 0.5, 0.5');

    const clickListener = function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        alert("test");

    };

    icon.addEventListener('click', clickListener);

    scene.appendChild(icon);
};