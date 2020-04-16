var t = anime.timeline({
    easing: "easeInOutCubic"
});

t.add({
	targets: ".home_title",
    opacity: [0,1],
    translateY: [-50,0]
});

t.add({
	targets: ".home_description",
    opacity: [0,1],
    translateY: [-50,0]
})

t.add({
	easing: "easeOutBounce",
	targets: ".home_media",
    opacity: [0,1],
    translateX: [100,0]
})