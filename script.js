function applyAspectRatioStyles() {
    if (window.innerWidth > window.innerHeight) {
        document.body.classList.add('landscape');
        document.body.classList.remove('portrait');
    } else {
        document.body.classList.add('portrait');
        document.body.classList.remove('landscape');
    }
}

applyAspectRatioStyles();

window.addEventListener('resize', applyAspectRatioStyles);

